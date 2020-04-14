import * as fontawesome from '@fortawesome/fontawesome';
import { fab, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

class IconLibrary {
    Init() {
        library.add(faLinkedinIn, faPhone, faAt, faPaperPlane);
    }
}

export default new IconLibrary();