import React from "react";
import { ExternalLink } from "lucide-react";

// Helper function for formatting prices
const formatPrice = (price) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(parseFloat(price));

export default function VendorPriceComparison({ vendorPrices, productName }) {
  if (!vendorPrices) return null;

  let prices = [];
  try {
    prices = JSON.parse(vendorPrices);
  } catch (error) {
    console.error("Failed to parse vendor prices:", error);
    return null;
  }

  if (prices.length === 0) return null;

  const sortedPrices = [...prices].sort(
    (a, b) => parseFloat(a.price) - parseFloat(b.price)
  );
  const lowestPrice = sortedPrices[0];

  return (
    <div className="card mt-4" id="price-comparison">
      <div className="card-header bg-white border-bottom">
        <h5 className="mb-0">
          Price Comparison
          <small className="text-muted d-block mt-1 fs-6">
            Compare prices across vendors
          </small>
        </h5>
      </div>
      <div className="card-body">
        {sortedPrices.map((vendor, idx) => (
          <div
            key={vendor.vendor}
            className={`d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center border rounded p-3 mb-3 ${
              vendor === lowestPrice ? "border-success bg-light" : "bg-body"
            }`}
          >
            <div className="d-flex flex-column">
              <span className="fw-semibold">{vendor.vendor}</span>
              <small className="text-muted">{productName}</small>
              {vendor === lowestPrice && (
                <span className="badge bg-success-subtle text-success mt-1">
                  Best Price
                </span>
              )}
            </div>

            <div className="d-flex align-items-center gap-3 mt-2 mt-md-0">
              <span
                className={`fw-bold fs-5 mb-0 ${
                  vendor === lowestPrice ? "text-success" : "text-dark"
                }`}
              >
                {formatPrice(vendor.price)}
              </span>
              <button
                onClick={() => window.open(vendor.url, "_blank")}
                className="btn btn-outline-primary btn-sm d-flex align-items-center"
              >
                <ExternalLink size={16} className="me-1" />
                Buy
              </button>
            </div>
          </div>
        ))}

        {sortedPrices.length > 1 && (
          <div className="alert alert-info mt-4 mb-0" role="alert">
            <strong>Price Difference:</strong> Save up to{" "}
            {formatPrice(
              parseFloat(sortedPrices[sortedPrices.length - 1].price) -
                parseFloat(lowestPrice.price)
            )}{" "}
            by choosing the best price!
          </div>
        )}
      </div>
    </div>
  );
}
