import classNames from "classnames";
interface Props{
    children: React.ReactNode,
    className?: string
}

export const Container = ({children, className}: Props) => {
    return (
        <div className={classNames("max-w-[1536px] mx-auto",className)}>
            {children}
        </div>
    );
};


