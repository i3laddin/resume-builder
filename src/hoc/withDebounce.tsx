import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

type WithDebounceProps = {
  onChange: (value: string) => void;
  value?: string;
};
const withDebounce = <P extends object>(Component: React.ComponentType<P & WithDebounceProps>) => {
  return (props: P & WithDebounceProps) => {
    const [value, setValue] = useState<string>(props.value || "");
    const debouncedValue = useDebounce(value, 500);

    const onChangeRef = React.useRef(props.onChange);
    useEffect(() => {
      onChangeRef.current = props.onChange;
    }, [props.onChange]);

    useEffect(() => {
      onChangeRef.current(debouncedValue);
    }, [debouncedValue]);

    return <Component {...props} value={value} onChange={(val: string) => setValue(val)} />;
  };
};

export default withDebounce;
