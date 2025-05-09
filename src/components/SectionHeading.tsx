import './SectionHeading.css';

export default function SectionHeading({ title }: { title: string }): React.ReactElement {
  return <div className="section-heading">{title}</div>;
}