import Head from 'next/head'

interface Props { //currently unused - need further clarification on typing defaultProps
  title: string,
  keywords: string,
  description: string,
}

const Meta = ({ title, keywords, description} ) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <title>{title}</title>
    </Head>
  )
}

Meta.defaultProps = {
  title: 'somethingsomething',
  keywords: 'python javascript science application',
  description: 'the personal website of Cole Styron'
}

export default Meta