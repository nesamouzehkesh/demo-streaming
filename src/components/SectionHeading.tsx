import './SectionHeading.css';

export default function SectionHeading({ title }: { title: string }) {
  return <div className="section-heading">{title}</div>;
}