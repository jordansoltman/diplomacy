import React, { ReactElement, PropsWithChildren, ReactNode } from 'react';
import './Container.scss';

export default function Container(props: PropsWithChildren<ReactNode>): ReactElement {
    return <div className="container">{props.children}</div>;
}
