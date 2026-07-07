import ContactForm from '../components/ContactForm.jsx'
import Header from '../components/Header.jsx'

export default function EmailPage() {
  return (
    <main className="bg-black px-10 md:px-20 lg:px-40 min-h-screen">
      <Header />
      <ContactForm />
    </main>
  )
}

