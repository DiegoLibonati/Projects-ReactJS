export const GifItem = ({
  title,
  url,
  avatar,
  avatarName,
  avatarDescription,
  avatarProfileUrl,
  gifDownload,
  setShowImg,
}) => {
  const handleShowImg = (e) => {
    const imgSrc = e.target.parentNode.parentNode.children[0].children[0].src;
    const imgAlt = e.target.parentNode.parentNode.children[0].children[0].alt;
    setShowImg([imgSrc, imgAlt]);

    const containerShowImg =
      e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        .lastChild;

    containerShowImg.style.display = "Flex";
    document.body.style.overflow = "Hidden";
  };

  return (
    <div className="gifs_container_category_list_card">
      <div className="gifs_container_category_list_card_img">
        <img src={url} alt={title}></img>
        <div className="gifs_container_category_list_card_img_description">
          <div className="gifs_container_category_list_card_img_description_header">
            <img src={avatar} alt={avatarName}></img>
            <h3>{avatarName}</h3>
          </div>
          <p>{avatarDescription}</p>
          <a href={avatarProfileUrl} target="_blank">
            Go to user Profile
          </a>
          <a href={gifDownload} target="_blank">
            Download
          </a>
        </div>
      </div>

      <div className="gifs_container_category_list_card_div">
        <p onClick={(e) => handleShowImg(e)}>{title}</p>
      </div>
    </div>
  );
};
