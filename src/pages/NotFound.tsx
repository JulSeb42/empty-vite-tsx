/*=============================================== NotFound ===============================================*/

import React from "react"
import { Link } from "react-router-dom"

import { PageLayout } from "../components"

const NotFound = () => {
    return (
        <PageLayout title="404">
            <h1>Page not found</h1>

            <p>
                <Link to="/">Back to homepage.</Link>
            </p>
        </PageLayout>
    )
}

export default NotFound
