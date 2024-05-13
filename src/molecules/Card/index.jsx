import { Card } from "@mantine/core";
import _ from "lodash";

export default function CardMolecule({ metricCardData = [], ...props }) {
  const data = _.isArray(metricCardData) ? metricCardData : [metricCardData];
  return (
    <>
      {data?.map((card, index) => (
        <Card className={card?.cardClass}>
          <div>
            {card?.header && (
              <header className={`${card?.headerClass}`}>{card?.header}</header>
            )}
            {card?.body && (
              <div
                className={`items-center justify-center ${card?.bodyClass} `}
              >
                {card?.body}
              </div>
            )}
            {card?.footer && (
              <footer
                className={`p-2 justify-center flex items-center ${card?.footerClass}`}
              >
                {card?.footer}
              </footer>
            )}
          </div>
        </Card>
      ))}
    </>
  );
}
