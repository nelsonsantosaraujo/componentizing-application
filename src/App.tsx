import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';
import { ContentProvider } from './context/ContentContext';

export function App() {
  return (
    <ContentProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </ContentProvider>
  )
}