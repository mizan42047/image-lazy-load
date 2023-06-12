import styles from './App.module.scss';
import ImageList from './components/ImageList/ImageList';
function App() {
  return (
    <div className={styles.container}>
      <ImageList />
    </div>
  )
}

export default App
