import variantsJson from './pdf-variants.json';

export type PdfVariantId = 'creator' | 'ai' | 'us';

export interface PdfVariant {
  id: PdfVariantId;
  fileName: string;
  label: string;
  pages: number;
}

const ids: PdfVariantId[] = ['creator', 'ai', 'us'];

export const pdfVariants: PdfVariant[] = variantsJson.variants.map((variant) => {
  if (!ids.includes(variant.id as PdfVariantId)) {
    throw new Error(`Unknown PDF variant: ${variant.id}`);
  }
  return variant as PdfVariant;
});

export function isPdfVariantId(value: string): value is PdfVariantId {
  return ids.includes(value as PdfVariantId);
}
