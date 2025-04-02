# StoryBook 8 / Angular 19 / PrimeNG 19

Проект содержит в себе библиотеку компонентов [suvorov-test-ui-lib](https://www.npmjs.com/package/suvorov-test-ui-lib) и 
возможность интерактивного взаимодействия с компонентами этой библиотеки через `StoryBook`

## Работа с проектом
* UI-компоненты добавляются в `projects/suvorov-test-ui-lib/src/lib/components`
* Компонент имплементируется в `src/app/components` где для него создается файл `stories.ts`

## Разработка
Развернуть Angular проект

```bash
ng serve
```

Развернуть StoryBook проект

```bash
npm run storybook
```

## Публикация

### Сборка библиотеки

Если не нужно обновлять библиотеку в npm, а просто собрать локально бандл

```bash
npm run build-library
```

### Сборка и публикация библиотеки

Сборка и публикация патч версии

```bash
npm run build-publish-library-patch
```

Сборка и публикация минорной версии

```bash
npm run build-publish-library-minor
```

Сборка и публикация мажорной версии

```bash
npm run build-publish-library-major
```



