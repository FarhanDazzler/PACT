import { Card } from "@mantine/core";
import _ from "lodash";

export default function CardMolecule({
  metricCardData = [],
  styles,
  ...props
}) {
  const data = _.isArray(metricCardData) ? metricCardData : [metricCardData];
  const fontStyles = {
    fontFamily: "font-avantt",
  };

  return (
    <>
      {!_.isEmpty(data) ? (
        data?.map((card, index) => (
          <Card className={card?.cardClass} style={{ root: fontStyles }}>
            <div>
              {card?.header && (
                <header className={`${card?.headerClass}`}>
                  {card?.header}
                </header>
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
                  className={`p-2 justify-center items-center ${card?.footerClass}`}
                >
                  {!_.isEmpty(card?.icon) ? card?.icon : ""}
                  {card?.footer}
                </footer>
              )}
            </div>
          </Card>
        ))
      ) : (
        <Card className={props?.cardClass}>
          <div>
            {props?.header && (
              <header className={`${props?.headerClass}`}>
                {props?.header}
              </header>
            )}
            {props?.body && (
              <div
                className={`items-center justify-center ${props?.bodyClass} `}
              >
                {props?.body}
              </div>
            )}
            {props?.footer && (
              <footer
                className={`p-2 justify-center flex items-center ${props?.footerClass}`}
              >
                {!_.isEmpty(props?.icon) ? props?.icon : ""}
                {props?.footer}
              </footer>
            )}
          </div>
        </Card>
      )}
    </>
  );
}
