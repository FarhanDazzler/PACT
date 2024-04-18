import { Card } from "@mantine/core";

export default function CardMolecule({
  header,
  footer,
  body,
  cardClass = "",
  headerClass = "",
  footerClass = "",
  bodyClass = "",
}) {
  return (
    //Using mantine cards as seperate component here and sending it across different pages or layout as dynamically.
    <Card className={cardClass}>
      <div>
        {header && <header className={`${headerClass}`}>{header}</header>}
        {body && (
          <div className={`items-center justify-center ${bodyClass} `}>
            {body}
          </div>
        )}
        {footer && (
          <footer
            className={`p-2 justify-center flex-items-center ${footerClass}`}
          >
            {footer}
          </footer>
        )}
      </div>
    </Card>
  );
}
