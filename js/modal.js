function showModal(num) {
    switch (num) {        
        case 1:
            document.getElementById('iframe').src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.781070817101!2d-87.86499018421634!3d42.325868079189135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f932fbc6ba7cd%3A0xcf2bbe275c6da815!2sKatzenmaier%20School!5e0!3m2!1ses!2scl!4v1611176933029!5m2!1ses!2scl";
          break;
        case 2:
            document.getElementById('iframe').src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.720311570162!2d-87.84787868421631!3d42.327163879189094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fecd0628e1bb5%3A0x9a4d5f9aafd42e02!2sMarjorie%20P%20Hart%20School!5e0!3m2!1ses-419!2scl!4v1611182774100!5m2!1ses-419!2scl";
          break;
        case 3:
            document.getElementById('iframe').src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.781070817101!2d-87.86499018421634!3d42.325868079189135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880f932fbc6ba7cd%3A0xcf2bbe275c6da815!2sKatzenmaier%20School!5e0!3m2!1ses-419!2scl!4v1611185724016!5m2!1ses-419!2scl";
          break;
        case 4:
            document.getElementById('iframe').src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.2700626313845!2d-87.85606978421663!3d42.315438279189955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880feccac26b07c5%3A0x8b51fa5d6efe771a!2sHoward%20A.%20Yeager%20School%20(PREK-K)!5e0!3m2!1ses-419!2scl!4v1611185806169!5m2!1ses-419!2scl";
          break;
        case 5:
            document.getElementById('iframe').src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45519.14070126963!2d-88.02665777982591!3d44.51625344978609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8802e61d64ca7a93%3A0xd35c038e0e1219bd!2sUniversidad%20de%20Wisconsin-Green%20Bay!5e0!3m2!1ses-419!2scl!4v1611185917266!5m2!1ses-419!2scl";
          break;
      }
      document.getElementById('openModal').style.display = 'block';
}

function CloseModal() {
    document.getElementById('openModal').style.display = 'none';
    document.getElementById('iframe').src="";
}



