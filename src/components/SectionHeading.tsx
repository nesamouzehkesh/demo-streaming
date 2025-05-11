import './SectionHeading.css';

export default function SectionHeading({ title }: { title: string }): React.ReactElement {
  return <div className="section-heading gradient-grey">{title}</div>;
}