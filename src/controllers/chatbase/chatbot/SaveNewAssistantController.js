import { runAssistant } from "../../../service/runAssistant.js";

class SaveNewAssistantController {
  async store(req, res, next) {
    try {
      const chatbotName = req.params.id;
      const { chatbot_id } = req.body;

      const createRunAssistant = await runAssistant(chatbotName, chatbot_id);

      return res.status(200).json(createRunAssistant);
    } catch (error) {
      next(error)
    }
  }
}

export { SaveNewAssistantController };