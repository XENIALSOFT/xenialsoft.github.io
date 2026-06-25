import type { ProductId } from '~/data/templates';
import { isProductId } from '~/data/templates';
import { buildProductPricingPage } from '~/data/pricing/build-product-page';
import { pricingHubPage } from '~/data/pricing/hub';

export { pricingHubPage } from '~/data/pricing/hub';
export { buildProductPricingPage } from '~/data/pricing/build-product-page';

export function getProductPricingPage(productId: string) {
  if (!isProductId(productId)) {
    return null;
  }
  return buildProductPricingPage(productId);
}

/** @deprecated getProductPricingPage 사용 */
export function getTemplatePricingPage(productId: string) {
  return getProductPricingPage(productId);
}

export function getAllProductPricingPages(): Record<ProductId, ReturnType<typeof buildProductPricingPage>> {
  return {
    amber: buildProductPricingPage('amber'),
    beryl: buildProductPricingPage('beryl'),
    crystal: buildProductPricingPage('crystal'),
  };
}
