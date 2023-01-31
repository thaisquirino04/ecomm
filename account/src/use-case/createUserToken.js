import { comparePassword } from "../helpers/password.js";
import { findUserByEmail } from "../repositories/accountRepository.js";
import { generateToken } from "../helpers/token.js";

export async function createUserTokenUseCase(email, password) {
    const possibleUser = await findUserByEmail(email);

    if (!possibleUser) {
        return null;
    }

const passwordIsMatch = await comparePassword(password, possibleUser.password)

if(passwordIsMatch) {
    return generateToken(possibleUser._id);
}

return null;

}


