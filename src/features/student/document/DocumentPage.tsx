import { FolderOpen } from 'lucide-react'
import { DocumentFilters } from './components/DocumentFilters'
import { DocumentSidebar } from './components/DocumentSidebar'
import { DocumentTable } from './components/DocumentTable'
import { DocumentTabs } from './components/DocumentTabs'
import './document.css'

export default function DocumentPage() {
  return (
    <div className="document-page">
      <main className="document-main">
        <section className="document-left">
          <header className="document-header">
            <h1>
              <FolderOpen size={28} />
              Tài liệu lớp 9A
            </h1>

            <DocumentTabs />
          </header>

          <DocumentFilters />
          <DocumentTable />
        </section>

        <DocumentSidebar />
      </main>
    </div>
  )
}