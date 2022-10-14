import { ReactElement } from "react";
import cn from "classnames";
type Props = {
  children: React.ReactNode;
  classes?: string;
};

function Grid({ children, classes }: Props): JSX.Element {
  return (
    <div className={cn("grid grid-cols-8 gap-2 md:grid-cols-16", classes)}>
      {children}
    </div>
  );
}

export default Grid;
