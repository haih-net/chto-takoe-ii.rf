import { Markdown } from 'app/Custom/components/Markdown'
import { useBoolean } from 'app/Custom/hooks/useBoolean'
import { useEffect } from 'react'

const schema = `
flowchart TB
  user["Пользователь или внешняя система"]
  external["Внешние сервисы и устройства"]

  subgraph runtime["Среда выполнения: вычислительные ресурсы, ОС, библиотеки; одна или несколько машин"]
    subgraph agent["ИИ-агент = LLM + обвязки"]
      llm["LLM: обработка контекста и генерация ответа"]

      subgraph wrappers["Обвязки: компоненты и слои ИИ-системы"]
        interface["Интерфейс / API"]
        data["История, инструкции и данные"]
        context["Подготовка контекста"]
        encode["Токенизатор: текст → идентификаторы токенов"]
        decode["Токенизатор: идентификаторы токенов → текст"]
        processing["Обработка ответа и управление шагами"]
        permissions["Проверка разрешений и вызов"]
        tools["Инструменты"]

        subgraph nested["Вложенный агент: часть обвязок всей системы"]
          nestedWrappers["Собственные обвязки"]
          nestedLlm["Собственная LLM"]
          nestedWrappers -->|Контекст| nestedLlm
          nestedLlm -->|Ответ| nestedWrappers
        end
      end
    end
  end

  user -->|Сообщение / промпт| interface
  interface -->|Запрос| context
  interface <-->|Чтение и сохранение без обращения к LLM| data
  data -->|Инструкции, история, нужные данные| context
  context -->|Текстовый контекст| encode
  encode -->|Входные токены| llm
  llm -->|Сгенерированные токены| decode
  decode -->|Ответ, в том числе данные в заданном формате| processing
  processing -->|Ответ пользователю| interface
  interface -->|Ответ системы| user
  processing -->|Сохранение результата| data
  processing -->|Запрос на действие| permissions
  permissions -->|Разрешённый вызов| tools
  tools -->|Результат| context
  tools -->|Операция| external
  external -->|Данные о результате| tools
  permissions -->|Задача вложенному агенту| nestedWrappers
  nestedWrappers -->|Результат| context`

export const MainSchema: React.FC = () => {
  const [inited, initedOn] = useBoolean()

  useEffect(() => {
    initedOn()
  }, [initedOn])

  return (
    <Markdown>{`
## Состав ИИ-системы

Рамки показывают состав системы, стрелки — передачу данных и вызовы.
Схема показывает текстовый путь работы с LLM. Компоненты могут находиться
на разных машинах и взаимодействовать через API.

\`\`\`${inited ? 'mermaid' : ''}
${schema}
\`\`\`

LLM генерирует ответ. Решение о вызове инструмента принимают обвязки.
Результат действия может войти в следующий контекст, и цикл повторится.

Относительно основной LLM обвязки находятся снаружи. Относительно агента
они находятся внутри его границ. Вложенный агент имеет собственные LLM
и обвязки, но целиком входит в обвязки рассматриваемой системы.
`}</Markdown>
  )
}
