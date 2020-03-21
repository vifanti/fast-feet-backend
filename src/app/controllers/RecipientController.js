import * as Yup from 'yup';
import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      house_number: Yup.number(),
      complement: Yup.string(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      zip_code: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const {
      id,
      name,
      street,
      house_number,
      complement,
      city,
      state,
      zip_code,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      street,
      house_number,
      complement,
      city,
      state,
      zip_code,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      house_number: Yup.number(),
      complement: Yup.string(),
      city: Yup.string().required(),
      state: Yup.string().required(),
      zip_code: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const recipient = await Recipient.findByPk(req.body.id);

    if (!recipient) {
      return res.status(400).json({ error: 'Recipient does not exists' });
    }

    const {
      id,
      name,
      street,
      house_number,
      complement,
      city,
      state,
      zip_code,
    } = await recipient.update(req.body);

    return res.json({
      id,
      name,
      street,
      house_number,
      complement,
      city,
      state,
      zip_code,
    });
  }

  async get(req, res) {
    const recipient = await Recipient.findAll();

    return res.json(recipient);
  }
}

export default new RecipientController();
