import React, { useState } from 'react'
import { Folder } from './Folder'
import './App.css'

export type FolderType = {
  name: string,
  files: string[],
  folders: FolderType[]
}
const App = () => {
  const [folder, setFolder] = useState<FolderType>({
    name: "root",
    files: ["f1", "f2"],
    folders: []
  })

  function addFileAtPath(tree: FolderType, path: number[], file: string): FolderType {

    if (path.length === 0) {
      return {...tree,files:[...tree.files, file]}
    }

    const [curr, ...rest] = path;

    return {
      ...tree,
      folders:tree.folders.map((child,index)=>{
        return index===curr?addFileAtPath(tree.folders[curr], rest, file): child
      })
    }
  }

  function addFolderAtPath(tree: FolderType, path: number[], folder: FolderType): FolderType {


    if (path.length === 0) {
      return { ...tree, folders:[...tree.folders, folder] }
    }

    const [curr, ...rest] = path;

    return {
      ...tree,
      folders: tree.folders.map((child, index) => {
        if (index === curr) {
          return addFolderAtPath(tree.folders[curr], rest, folder)
        }
        else {
          return child
        }
      })
    }
  }
  return (
    <>
      <Folder folder={folder} setFolder={setFolder} addFileAtPath={addFileAtPath} addFolderAtPath={addFolderAtPath} path={[]} />
    </>
  )
}

export default App
