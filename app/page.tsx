import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-24 min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>
          <p className="mb-4">Scroll down to see the navbar transition effect.</p>

          {/* Sample content to enable scrolling */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Section {i + 1}</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu
                sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor.
              </p>
              <p>
                Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse
                dictum feugiat nisl ut dapibus. Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit
                odio.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

