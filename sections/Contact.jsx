import { InlineWidget } from 'react-calendly';
import Head from 'next/head';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Perfect Fit | Book a Session</title>
        <meta
          name="description"
          content="Schedule a personalized clothing alteration session with Grace using Calendly. Select a convenient time to ensure your garments fit perfectly and look their best."
        />
      </Head>

      <section data-scroll-section>
        <h2>Book a Session</h2>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <InlineWidget url='https://calendly.com/lafrancdai/alterations-brainstorming' />
        </div>
      </section>
    </>
  );
}
