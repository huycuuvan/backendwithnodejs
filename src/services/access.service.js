const shopModel = require("../models/shop.model");
const bCrypt = require("bcrypt");
const crypto = require("crypto");
const roleShop = {
  SHOP: "SHOP",
  WRITER: "WRITER",
  EDITOR: "EDITOR",
  ADMIN: "ADMIN",
};
class AccessService {
  static signUp = async ({ name, email, password }) => {
    try {
      // step1: check email exists?

      const hodelShop = await shopModel.findOne({ email }).lean();

      if (hodelShop) {
        return {
          code: "xxxx",
          message: "Shop already register",
        };
      }
      const passwordHash = await bCrypt.hash(password, 10);
      const newShop = await shopModel.create({
        name,
        email,
        passwordHash,
        role: [roleShop.SHOP],
      });

      if (newShop) {
        // created privateKey(de cho nguoi dung, khong luu, dung de sign token), publicKey(luu trong he thong de verify token)
        const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
          modulusLength: 4096,
        });
        console.log({ privateKey, publicKey }); //save to collection Key
      }
    } catch (error) {
      return {
        code: "xxx",
        message: error.message,
        status: "error",
      };
    }
  };
}

module.exports = AccessService;
