import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black" style={{fontFamily: 'var(--font-space-grotesk)'}}>
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <Image
              src="/logo.png"
              alt="Grokipedia Logo"
              width={60}
              height={60}
              className="mx-auto mb-4"
            />
          </div>
          <h1 className="text-4xl font-serif mb-2 text-black">Grokipedia</h1>
          <p className="text-lg text-black mb-6">The Free Encyclopedia</p>
        </div>

        {/* Center Globe Image */}
        <div className="mb-8">
          <Image
            src="/center_image.png"
            alt="Grokipedia Globe"
            width={200}
            height={200}
            className="mx-auto"
          />
        </div>

        {/* Language Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12 max-w-4xl w-full">
          {/* English */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-1">
              <a href="#" className="text-blue-600 hover:underline">English</a>
            </h3>
            <p className="text-sm text-gray-600">7,056,000+ articles</p>
          </div>

          {/* Japanese */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-1">
              <a href="#" className="text-blue-600 hover:underline">日本語</a>
            </h3>
            <p className="text-sm text-gray-600">1,472,000+ 記事</p>
          </div>

          {/* Russian */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-1">
              <a href="#" className="text-blue-600 hover:underline">Русский</a>
            </h3>
            <p className="text-sm text-gray-600">2,063,000+ статей</p>
          </div>

          {/* German */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-1">
              <a href="#" className="text-blue-600 hover:underline">Deutsch</a>
            </h3>
            <p className="text-sm text-gray-600">3,051,000+ Artikel</p>
          </div>

          {/* French */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-1">
              <a href="#" className="text-blue-600 hover:underline">Français</a>
            </h3>
            <p className="text-sm text-gray-600">2,709,000+ articles</p>
          </div>

          {/* Spanish */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-1">
              <a href="#" className="text-blue-600 hover:underline">Español</a>
            </h3>
            <p className="text-sm text-gray-600">2,061,000+ artículos</p>
          </div>

          {/* Chinese */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-1">
              <a href="#" className="text-blue-600 hover:underline">中文</a>
            </h3>
            <p className="text-sm text-gray-600">1,500,000+ 条目/條目</p>
          </div>

          {/* Italian */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-1">
              <a href="#" className="text-blue-600 hover:underline">Italiano</a>
            </h3>
            <p className="text-sm text-gray-600">1,935,000+ voci</p>
          </div>

          {/* Polish */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-1">
              <a href="#" className="text-blue-600 hover:underline">Polski</a>
            </h3>
            <p className="text-sm text-gray-600">1,668,000+ haseł</p>
          </div>

          {/* Portuguese */}
          <div className="text-center">
            <h3 className="text-lg font-bold mb-1">
              <a href="#" className="text-blue-600 hover:underline">Português</a>
            </h3>
            <p className="text-sm text-gray-600">1,155,000+ artigos</p>
          </div>
        </div>

        {/* Search Box */}
        <div className="max-w-lg w-full mx-auto mb-8">
          <div className="flex">
            <select className="px-3 py-2 bg-white border border-gray-300 text-black text-sm">
              <option>EN</option>
            </select>
            <input
              type="text"
              className="flex-1 px-4 py-2 bg-white border border-l-0 border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Language Selector */}
        <div className="mb-12">
          <div className="flex items-center text-blue-600 hover:underline cursor-pointer">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.383-.39-.583-.583a18.64 18.64 0 01-2.107 2.279 1 1 0 11-1.216-1.588l.003-.002c.498-.38.997-.8 1.492-1.26-1.121-1.376-2.074-2.963-2.784-4.702L2.268 6H2a1 1 0 110-2h.643c.066 0 .131.005.195.014.015-.017.034-.032.052-.046V3a1 1 0 011-1zm2 8.24c.626-.847 1.18-1.73 1.659-2.64H6.34c.48.91 1.034 1.793 1.66 2.64z" clipRule="evenodd" />
            </svg>
            Read Grokipedia in your language
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Wikimedia Foundation */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-700">
                  Grokipedia is hosted by the Groimeda Foundation, a non-profit organization that also hosts a range of other projects powered by GROK AI.
                </p>
                <p className="text-sm text-blue-600 hover:underline cursor-pointer mt-2">
                  You can support our work with a donation.
                </p>
              </div>
            </div>

            {/* Commons */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-blue-600 hover:underline cursor-pointer font-semibold">Commons</h4>
                <p className="text-sm text-gray-700">Free media collection</p>
              </div>
            </div>

            {/* Wiktionary */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <div>
                <h4 className="text-blue-600 hover:underline cursor-pointer font-semibold">Groktionary</h4>
                <p className="text-sm text-gray-700">Free dictionary</p>
              </div>
            </div>
          </div>

          {/* Additional projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Wikivoyage */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-blue-600 hover:underline cursor-pointer font-semibold">Grokvoyage</h4>
                <p className="text-sm text-gray-700">Free travel guide</p>
              </div>
            </div>

            {/* Wikibooks */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-blue-600 hover:underline cursor-pointer font-semibold">Grokbooks</h4>
                <p className="text-sm text-gray-700">Free textbooks</p>
              </div>
            </div>

            {/* Wikinews */}
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9H9V9h4v2zm4-4H9V5h8v2z"/>
                </svg>
              </div>
              <div>
                <h4 className="text-blue-600 hover:underline cursor-pointer font-semibold">Groknews</h4>
                <p className="text-sm text-gray-700">Free news source</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
