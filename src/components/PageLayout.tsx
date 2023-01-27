/*=============================================== PageLayout ===============================================*/

import React from "react"

import { Helmet } from "./"
import { HelmetProps } from "./Helmet"

const PageLayout = ({
    title,
    description,
    keywords,
    cover,
    children,
}: Props) => {
    return (
        <>
            <Helmet
                title={title}
                description={description}
                keywords={keywords}
                cover={cover}
            />

            {children}
        </>
    )
}

export default PageLayout

interface Props extends HelmetProps {
    children?: any
}
