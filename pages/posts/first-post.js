import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost(){
  return (
    <>
    <Layout>
    <Head>
      <title>first post</title>
    </Head>
      <h1>First Post</h1>
      <h2>
        {/* ページ内リンクの場合Link外部ページの場合はただのaタグを使う */}
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <a href="http://google.com">Google</a>
    </Layout>
    </>
  );
}
