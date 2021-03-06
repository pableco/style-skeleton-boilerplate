# Ejemplo de maquetación de proyectos para dynamic template #

[![build status](https:///REPO_URL/badges/master/build.svg)](https:///REPO_URL/builds)

## Consideraciones para la actualización de estilos

Para agilizar el mantenimiento y gestión de la demanda de los proyecto web tenemos que controlar el proceso de escritura de CSS de los módulos en un punto común para poner en producción la menor cantidad de código de estilo y fomentar la utilización de los módulos html reutilizables.

Esta librería ejemplifica como desarrollar una estructura para los estilos que permite darle flexibilidad para los diferentes diseños a través de "temas" y tener un esqueleto de estilos que tenga la responsabilidad de escribir las clases css necesarias para el módulo.

## Condiciones para la actualización del módulo

El HTML tiene que tener clases BEM en sus elementos de manera que sea facil de recorrer y se puedan escribir los estilos con baja especificidad por defecto: (0,0,1,0)

Se han creado documentos que ejemplifican el uso de clases BEM en html
* [Como utilizar Nomenclatura BEM en módulos](https:///dynamic_templates/wikis/Nomenclatura-BEM)

## Estructura de ficheros SCSS

```
.
|_____skeleton.scss
|_____layouts.scss
|____themes
| |_____default.scss
| |_____option.scss
| |_____alternate.scss
```

## Ejemplo de "_skeleton.scss"

Es el unico fichero que puede escribir la clase en el CSS

```scss
.mainclass {
    @extend %mainclass !optional;
    &__sub {
        @extend %mainclass__sub !optional;
    }
    &__extra {
        @extend %mainclass__extra !optional;
    }
    @content;
}
```

Siempre debe finalizar con @content para extender desde los demas ficheros los estilos personalizados.

## Ejemplo de "_layouts.scss"

```scss
// add dependency of 3rd party css here
@import "../../libraries/_basic_variables";
@import "../../libraries/_resets";
@import 'skeleton';

@import 'themes/_default';
@import 'themes/_option';
@import 'themes/_alternate';
```

> Layouts importa las dependencias que tendrán los temas (varibales, resets, etc. y siempre el el fichero skeleton) de manera que se pueda genera el estilo del módulo de manera independiente.

## Ejemplo de "/themes/_default"

```scss
@mixin mainclass__default(
    $border: .1rem solid $main-color, // variable librería o proyecto
    $sub-bg-color: $main-color, // variable librería o proyecto
    $img-width: 15rem,
    $img-height: 10rem,
    $screen-md: $screen_md, // variable librería o proyecto
    ){
    %mainclass{
        display: flex;
        &-sub{
            border: $border;
            width: 100%;
            height: $img-height;
            @media screen and (min-width: $screen-md) {
                width: $img-width;
            }
        }
        &__extra{
            background-color: $sub-bg-color;
        }
        @content;
    }
}

```

Siempre debe finalizar con @content para extender desde los demas ficheros los estilos personalizados.

La prioridad en los temas es que sea el esqueleto mínimo para luego personalizar en proyecto segun la necesidad del diseño:
Todos los colores deben ser variables definidas en el mixing de una variable de color básica de la libreria. Tienen los media querys para su comportamiento en diferentes resoluciones que se definen con varibles en el mixing que vienen de las por defecto de la librería.


Los placeholders (%) reemplaza en el flujo de trabajo a las clases (.) para no cambiar la sintaxis de los estilos actuales, de esta forma los estilos previos a la actualización pueden refactorizarse con menor complejidad.

## Ejemplo de implementación en proyecto

```scss
@import './dynamic/modules/mainclass/layouts';

@include mainclass__default(
    $border: none,
    $sub-bg-color: green,
    $sub-width: 17rem,
    $sub-height: 20rem
) {
    %mainclass__extra::after{
        content: '-----'
    }
};
```

## Cómo regla general y para destacar:
* Los media querys se estructuran mobile first se maqueta por defecto para resoluciones pequeñas pensando en que no existen hovers y luego se hacen los quiebres para resoluciones superiores.
* El único fichero que puede escribir la clase css (.) es "_skeleton.scss" es mala practica que se esciban en proyecto o en otro fichero
* Las unidades que utilizamos son REM. Solo para el caso de los botones usaremos EM.
