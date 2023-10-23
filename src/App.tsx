import React from "react"
import {Router} from "./router"
import {ChakraProvider} from "@chakra-ui/react"
import {QueryClient, QueryClientProvider} from "react-query"

const queryClient = new QueryClient()

export default function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <ChakraProvider>
                <Router/>
            </ChakraProvider>
        </QueryClientProvider>
    )
}
