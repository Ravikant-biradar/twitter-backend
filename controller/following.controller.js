import { user } from "../model/user.model.js";
export const following_controllers = async (req, res) => {
  try {
    const { id } = req.params;

    const { logged_user } = req.body;
    const ids = await user.findById(id);
    console.log(`ids : ${ids}`);
    const check_user = await user.findById(logged_user);
    console.log(`check_user : ${check_user}`);
    if (
      check_user.following.includes(id) ||
      ids.followers.includes(check_user._id)
    ) {
      await user.findByIdAndUpdate(check_user, { $pull: { following: id } });
      await user.findByIdAndUpdate(ids, {
        $pull: { followers: check_user._id },
      });
    } else {
      await user.findByIdAndUpdate(
        check_user,
        { $push: { following: id } },
        await user.findByIdAndUpdate(ids, {
          $push: { followers: check_user._id },
        })
      );
    }
  } catch (error) {
    console.log(error);
  }
};
