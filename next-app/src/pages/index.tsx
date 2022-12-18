import Layout from "../components/layout"
import Link from "next/link"
import MyImage from "../components/image"

export default function Home() {
    const title = "Index"

    return (
        <div>
            <Layout header="Next.js" title="Top Page.">
                <div className="alert alert-primary text-center">
                    <h5 className="mb-4">Welcome to next.js!</h5>
                    <div>
                        <MyImage fname="image.jpg" size="300" />
                    </div>
                    <div className="mt-5 mb-5">
                        <Link href="./other">
                            <button className="btn btn-primary">
                                got to Other &gt;&gt;
                            </button>
                        </Link>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
