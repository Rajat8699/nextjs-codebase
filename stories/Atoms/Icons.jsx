import { getSVGIcon } from "../../utils/commonMethods";


const getSVGIconList = iconNames => {
  if (iconNames && Array.isArray(iconNames)) {
    return (
      <div className="flex flex-wrap gap-5">
        {(iconNames || []).map(icon => {
          const SVGIcon = getSVGIcon(icon);
          return (
            <div className="flex flex-col justify-center align-middle">
              <SVGIcon className="mx-auto"/>
              {icon}
            </div>
          );
        })}
      </div>
    );
  }
};

export const CustomIcons = ({ iconNames }) => {
  return <>{getSVGIconList(iconNames)}</>;
};
