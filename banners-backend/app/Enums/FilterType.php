<?php

namespace App\Enums;

enum FilterType: string
{
    case Branch = 'branch';
    case Type = 'type';
    case Section = 'section';
    case Material = 'material';
}
