/*=============================================== Helmet ===============================================*/

import React from "react"
import { Helmet as HelmetMeta } from "react-helmet"

import siteData from "../data/site-data"

const Helmet = ({ title, description, keywords, cover }: HelmetProps) => {
    return (
        <HelmetMeta>
            <title>
                {title} | {siteData.name}
            </title>
            <link rel="icon" href={siteData.favicon} />
            <meta content="IE=edge" http-equiv="X-UA-Compatible" />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="author" content={siteData.author} />
            <meta property="og:title" content={title} />
            <meta property="og:type" content={siteData.type} />
            <meta property="og:image" content={cover} />
            <meta property="og:site_name" content={siteData.name} />
            <meta property="og:locale" content={siteData.lang} />
            <html lang={siteData.lang} />
        </HelmetMeta>
    )
}

export default Helmet

export interface HelmetProps {
    title: string
    description?: string
    keywords?: any
    cover?: string
}
