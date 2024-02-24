import ModalContainer from "./ModalContainer";
import { useFolder } from "../../Hooks/useFolder";

const ModalAddLink = ({ isOpen, onClose, url }) => {
  const { folder } = useFolder();

  const addLink = (
    <>
      <h2 className="modalTitle">폴더에 추가</h2>
      <div className="menuLists">
        {folder &&
          folder.map((eachFolder) => (
            <div className="menuList">
              {eachFolder.name}
              <p>{eachFolder.link.count}개 링크</p>
            </div>
          ))}
      </div>
      <button className="modelBtn">추가하기</button>
    </>
  );

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} children={addLink} />
  );
};

export default ModalAddLink;
