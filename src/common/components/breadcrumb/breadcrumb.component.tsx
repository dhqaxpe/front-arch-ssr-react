import React from 'react'
import styles from './breadcrumb.module.scss'
import classNames from 'classnames';

export type BreadcrumbProps = {
    steps: {
        name:String
        ref?:String
    }[]
    Separator?: React.Component<{className:string}>
}

export function Breadcrumb(props: BreadcrumbProps) {
    const {steps, Separator=DefaultSeparator} = props;

    return (
        <nav class={styles.container} aria-label="steps-breadcrumb">
            <ol class={styles.list}> 
                {steps.map((p,i) => {
                    return (
                        <li aria-current="page" className={classNames(styles['list__item'])}> 
                            <a href={p.ref} className={classNames(styles['list__item__label'], {[styles['list__item__label--current']]: i === steps.length -1})}>
                                {p.name}
                            </a>
                            {i < steps.length - 1 ?
                                <Separator className={classNames(styles['list__item__icon'])}/>
                                : 
                                false
                            } 
                        </li> 
                    );
                })}
            </ol>
        </nav>
    );
}

function DefaultSeparator(props:{className:string}){
    return <div {...props}>&gt</div>
}