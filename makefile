# Generate components and pages automatically
# Usage for components: run in terminal `make component name=NameOfComponent`
# Usage for pages: run in terminal `make page pageName=NameOfPage`

define newline


endef

define INDEX_FILE
/*=============================================== $(name) exports ===============================================*/

export { default as $(name) } from "./$(name)"
endef

define COMPONENT_FILE
/*=============================================== $(name) component ===============================================*/

import React from "react"

import * as Styles from "./styles"
import { $(name)Props } from "./types"

const $(name) = ({ as, ...rest }: $(name)Props) => {
	return (
		<Styles.Styled$(name) as={as} {...rest}>

		</Styles.Styled$(name)>
	)
}

export default $(name)
endef

define STYLES_FILE
/*=============================================== $(name) styles ===============================================*/

import styled from "styled-components/macro"

export const Styled$(name) = styled.div<{ }>`
	
`
endef

define TYPES_FILE
/*=============================================== $(name) types ===============================================*/

import React from "react"

export interface $(name)Props extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType
}
endef

define PAGE_FILE
/*=============================================== $(pageName) ===============================================*/

import React from "react"

import { PageLayout } from "../components"

const $(pageName) = () => {
    return (
        <PageLayout title="$(pageName)">

        </PageLayout>
    )
}

export default $(pageName)
endef

component:
	mkdir src/components/$(name)
	touch src/components/$(name)/index.ts
	touch src/components/$(name)/$(name).tsx
	touch src/components/$(name)/styles.tsx
	touch src/components/$(name)/types.ts

	@echo '$(subst $(newline),\n,${INDEX_FILE})' > src/components/$(name)/index.ts
	@echo '$(subst $(newline),\n,${COMPONENT_FILE})' > src/components/$(name)/$(name).tsx
	@echo '$(subst $(newline),\n,${STYLES_FILE})' > src/components/$(name)/styles.tsx
	@echo '$(subst $(newline),\n,${TYPES_FILE})' > src/components/$(name)/types.ts
	@echo 'export * from "./$(name)"' >> src/components/index.ts

page:
	touch src/pages/$(pageName).tsx
	@echo '$(subst $(newline),\n,${PAGE_FILE})' > src/pages/$(pageName).tsx