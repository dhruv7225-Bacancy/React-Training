import React, { useCallback, useRef, useState } from 'react'
import type { FolderType } from './App'

type PropsType = {
    folder: FolderType,
    addFileAtPath: (tree: FolderType, path: number[], file: string) => FolderType,
    addFolderAtPath: (tree: FolderType, path: number[], folder: FolderType) => FolderType,
    path: number[],
    setFolder: React.Dispatch<React.SetStateAction<FolderType>>
}

export const Folder = ({ folder, addFileAtPath, addFolderAtPath, path, setFolder }: PropsType) => {
    const [show, setShow] = useState(false)
    const [addFolderFlag, setAddFolderFlag] = useState(false)
    const [addFileFlag, setAddFileFlag] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null);


    const addFolder = useCallback(function addFolder() {

        if (inputRef.current?.value === undefined) return;

        const newFolder: FolderType = {
            name: inputRef.current.value,
            files: [],
            folders: []
        }

        setFolder(prev => addFolderAtPath(prev, path, newFolder))

        setShow(true)
        setAddFolderFlag(false)

    }, [addFolderAtPath, path, setFolder])

    const addFile = useCallback(() => {

        setFolder(prev => {
            if (inputRef.current?.value === undefined) return prev
            return addFileAtPath(prev, path, inputRef.current.value)
        })
        
        setShow(true)
        setAddFileFlag(false)
        
    }, [addFileAtPath, path, setFolder])
    return (
        <>

            <div style={{ border: "2px solid black", padding: "10px" }}>
                {
                    <>
                        <div style={{ display: "flex" }}>
                            <p onClick={() => setShow(prev => !prev)} style={{ cursor: 'pointer' }}> 🗂️ {folder.name}</p>
                            <button onClick={() => setAddFolderFlag(true)}>+ 🗂️</button>
                            <button onClick={() => setAddFileFlag(true)}>+ 📁</button>
                        </div>

                    </>

                }
                <div>
                    {
                        addFolderFlag && (
                            <>
                                <input type='text' placeholder='folder name' ref={inputRef} />
                                <button onClick={addFolder}>add</button>
                            </>
                        )
                    }
                    {
                        addFileFlag && (
                            <>
                                <input type='text' placeholder='File name' ref={inputRef} />
                                <button onClick={addFile}>add</button>
                            </>
                        )
                    }
                </div>
                {
                    show && folder?.files?.map(file => (<>
                        <p key={file} style={{ marginLeft: "10px" }}> 📁 {file}</p>
                    </>))
                }
                {
                    show && folder?.folders?.map((folder, index) => (<>
                        <Folder
                            key={folder.name}
                            folder={folder}
                            setFolder={setFolder}
                            addFileAtPath={addFileAtPath}
                            addFolderAtPath={addFolderAtPath}
                            path={[...path, index]}
                        />
                    </>))
                }
            </div>




        </>

    )
}

export default Folder
