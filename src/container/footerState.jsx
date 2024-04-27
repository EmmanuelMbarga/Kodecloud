import { useState } from "react";

export const FooterStateApp = (props) => {
  const [footerElement, setFooterElement] = useState(false);

  const handlerClicked = () => {
    setFooterElement(!footerElement);
  };

  return (
    <div className="hidden Portable:contents">
      <div className=" flex justify-between Portable:border-b Portable:py-4 " onClick={handlerClicked}>
        <h2 className="menufooter">{props.text}</h2>
        <span>{props.ChevronR}</span>
      </div>
      {footerElement && (
        <>
          <ul>
            <li className="footerelement">{props.titre1}</li>
            <li className="footerelement">{props.titre2}</li>
            <li className="footerelement">{props.titre3}</li>
            <li className="footerelement">{props.titre4}</li>
            <li className="footerelement">{props.titre5}</li>
            <li className="footerelement">{props.titre6}</li>
            <li className="footerelement">{props.titre7}</li>
            <li className="footerelement">{props.titre8}</li>
            
          </ul>
        </>
      )}

      {/* <ul>
        <li>devOps</li>
        <li>kubernetes</li>
        <li>docker</li>
        <li>linux</li>
        <li>laC</li>
        <li>AWS</li>
        <li>GCP</li>
        <li>AZURE</li>
      </ul> */}
    </div>
  );
};
