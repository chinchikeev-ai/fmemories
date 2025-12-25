import { motion } from "framer-motion";
import { TreeDeciduous, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-background to-muted/50 pt-16 pb-8">
      {/* Decorative gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-indigo-light flex items-center justify-center">
                <TreeDeciduous className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Родные Связи</span>
            </div>
            <p className="text-muted-foreground max-w-md leading-relaxed mb-6">
              Современная платформа для сохранения и приумножения истории вашей семьи. 
              Создавайте генеалогическое древо, получайте напоминания о важных датах и 
              находите родных с помощью ИИ.
            </p>
            <div className="flex gap-4">
              {["telegram", "vk", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
                >
                  <span className="text-sm font-medium text-muted-foreground uppercase">
                    {social[0]}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Продукт</h4>
            <ul className="space-y-3">
              {["Возможности", "Тарифы", "Отзывы", "FAQ"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Компания</h4>
            <ul className="space-y-3">
              {["О нас", "Блог", "Контакты", "Карьера"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm text-muted-foreground flex items-center gap-1"
            >
              Сохраняем связи поколений
              <Heart className="w-4 h-4 text-pink mx-1 animate-pulse" />
              2025
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-6 text-sm"
            >
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Условия использования
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;