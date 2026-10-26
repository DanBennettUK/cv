import { notFound } from 'next/navigation';
import PdfDocument from '@/components/PdfDocument';
import { isPdfVariantId, pdfVariants, type PdfVariantId } from '@/lib/pdf-variants';

export function generateStaticParams() {
  return pdfVariants.map((variant) => ({ variant: variant.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ variant: string }> }) {
  const { variant } = await params;
  const match = pdfVariants.find((item) => item.id === variant);
  return {
    title: match ? `Dan Bennett | ${match.label}` : 'Dan Bennett',
    robots: { index: false, follow: false },
  };
}

export default async function PdfPage({ params }: { params: Promise<{ variant: string }> }) {
  const { variant } = await params;
  if (!isPdfVariantId(variant)) notFound();
  const id: PdfVariantId = variant;
  return <PdfDocument id={id} />;
}
