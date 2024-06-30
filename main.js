const fileInput = document.getElementById('file');
const fileNameInput = document.getElementById('file-name');
const chnageBtn = document.getElementById('change-btn');

chnageBtn.addEventListener('click', () => {
  const target = fileInput.files[0];
  const newName = fileNameInput.value;
  if (!target) {
    alert('바꿀 파일을 업로드 해주세요.');
    return ;
  }

  if (newName.trim().length < 1) {
    alert("파일 이름을 입력해주세요.");
    return ;
  }

  const extArray = target.name.split('.');
  const extName = extArray[extArray.length - 1];

  let newFile = new File([target], `${newName}.${extName}`, { type: target.type });
  const blob = new Blob([newFile], { type: newFile.type });
  const blobUrl = URL.createObjectURL(blob)
  const download = document.createElement('a');
  download.href = blobUrl;
  download.download = newFile.name;
  console.log(download);
  download.click();
})
