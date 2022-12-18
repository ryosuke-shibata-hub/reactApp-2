import Layout from "../components/layout"
import Link from "next/link"

export default function Other() {
    const title = "Other"

    return (
        <div>
            <Layout header="Next.js" title="Other Page.">
                <div className="card p-4 text-center">
                    <h5 className="mb-4">This is Other Page...</h5>
                    <Link href="/">
                        <button className="btn btn-primary">
                            &lt;&lt; Back to Top
                        </button>
                    </Link>
                </div>
            </Layout>
        </div>
    )
}
