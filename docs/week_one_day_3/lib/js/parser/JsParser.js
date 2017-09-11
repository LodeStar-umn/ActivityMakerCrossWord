(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    com: Kotlin.definePackage(null, /** @lends _.com */ {
      lodestarlearning: Kotlin.definePackage(function () {
        this.parser_khnoic$ = new _.com.lodestarlearning.jsparser.OperationParser();
      }, /** @lends _.com.lodestarlearning */ {
        f: function (expression) {
          return _.com.lodestarlearning.parser_khnoic$.parse_ivxn3r$(expression, false);
        },
        f_0: function (operation) {
          var root = new _.com.lodestarlearning.jsparser.DynValue();
          root.set_za3rmp$(ParserApiHooks.Exposed);
          var value = operation.execute_30wzo8$(root);
          return value;
        },
        main_kand9s$f: function (it) {
          console.log("Adding methods to ParserAPIHooks");
          if (ParserApiHooks == null)
            throw new Kotlin.Exception('A JavaScript object by the name Exposed must be set.');
          ParserApiHooks.parse = _.com.lodestarlearning.f;
          ParserApiHooks.execute = _.com.lodestarlearning.f_0;
          Kotlin.modules['builtins'].kotlin.Unit;
        },
        main_kand9s$: function (args) {
          _.com.lodestarlearning.jsparser.Value.object.parseLongAsDouble = true;
          window.onload = _.com.lodestarlearning.main_kand9s$f;
        },
        jsparser: Kotlin.definePackage(function () {
          this.OperatorLookup = Kotlin.createObject(null, function () {
            var tmp$0;
            this.START_LOOKUP_dxp6qa$ = new _.com.lodestarlearning.jsparser.AlphaTree();
            this.END_LOOKUP_fi4jx1$ = new _.com.lodestarlearning.jsparser.AlphaTree();
            this.VALUES = _.com.lodestarlearning.jsparser.Operator.values();
            tmp$0 = Kotlin.modules['stdlib'].kotlin.collections.get_lastIndex_eg9ybj$(this.VALUES);
            for (var i = 0; i <= tmp$0; i++) {
              var value = this.VALUES[i];
              if (value.skipAdd)
                continue;
              this.START_LOOKUP_dxp6qa$.add_a8ip1j$(value.start, value);
              if (value.end != null)
                this.END_LOOKUP_fi4jx1$.add_a8ip1j$(value.end, value);
            }
          }, {
            withStartTag_905azu$: function (chars, startIndex) {
              return this.START_LOOKUP_dxp6qa$.find_905azu$(chars, startIndex);
            },
            withEndTag_905azu$: function (chars, startIndex) {
              return this.END_LOOKUP_fi4jx1$.find_905azu$(chars, startIndex);
            }
          });
        }, /** @lends _.com.lodestarlearning.jsparser */ {
          AlphaTree: Kotlin.createClass(null, function () {
            this.value = null;
            this.branches = new Kotlin.PrimitiveNumberHashMap();
          }, /** @lends _.com.lodestarlearning.jsparser.AlphaTree.prototype */ {
            add_a8ip1j$: function (str, newValue, startIndex) {
              if (startIndex === void 0)
                startIndex = 0;
              if (str.length === startIndex) {
                this.value = newValue;
                return;
              }
              var char = str.charAt(startIndex);
              var branch = this.branches.get_za3rmp$(char);
              if (branch == null) {
                branch = new _.com.lodestarlearning.jsparser.AlphaTree();
                this.branches.put_wn2jw4$(char, branch);
              }
              branch.add_a8ip1j$(str, newValue, startIndex + 1);
            },
            find_905azu$: function (str, startIndex) {
              if (str.length === startIndex)
                return this.value;
              var char = str.charAt(startIndex);
              var branch = this.branches.get_za3rmp$(char);
              if (branch != null) {
                var found = branch.find_905azu$(str, startIndex + 1);
                if (found != null)
                  return found;
              }
              return this.value;
            }
          }),
          DynValue: Kotlin.createClass(function () {
            return [_.com.lodestarlearning.jsparser.Value];
          }, function $fun() {
            $fun.baseInitializer.call(this);
            this.obj_fwbkai$ = null;
          }, /** @lends _.com.lodestarlearning.jsparser.DynValue.prototype */ {
            get_61zpoe$: function (name) {
              var found = _.com.lodestarlearning.jsparser.Value.prototype.get_61zpoe$.call(this, name);
              if (found.isVoid()) {
                found = new _.com.lodestarlearning.jsparser.DynValue();
                found.name = name;
                this.append_30wzo8$(found);
                if (this.obj_fwbkai$ != null) {
                  found.set_za3rmp$(this.obj_fwbkai$[name]);
                }
                 else {
                  found.set_za3rmp$(null);
                }
              }
              return found;
            },
            get_za3lpa$: function (index) {
              var found;
              if (index > this.size) {
                throw new Kotlin.IndexOutOfBoundsException(index.toString() + ' is out of bounds, must be less than or equal to ' + this.size);
              }
               else if (index === this.size) {
                found = new _.com.lodestarlearning.jsparser.DynValue();
                found.type = _.com.lodestarlearning.jsparser.ValueType.object.NULL;
                this.append_30wzo8$(found);
              }
               else {
                found = _.com.lodestarlearning.jsparser.Value.prototype.get_za3lpa$.call(this, index);
                if (found.isVoid()) {
                  found = new _.com.lodestarlearning.jsparser.DynValue();
                  if (this.obj_fwbkai$ != null) {
                    found.set_za3rmp$(this.obj_fwbkai$[index]);
                  }
                }
              }
              return found;
            },
            set_za3rmp$: function (value) {
              if (value == null) {
                this.type = _.com.lodestarlearning.jsparser.ValueType.object.NULL;
              }
               else if (typeof value === 'number') {
                this.set_14dthe$(value);
              }
               else if (typeof value === 'number') {
                this.set_mx4ult$(value);
              }
               else if (Kotlin.isType(value, Kotlin.Long)) {
                this.set_s8cxhz$(value);
              }
               else if (typeof value === 'number') {
                this.set_za3lpa$(value);
              }
               else if (typeof value === 'boolean') {
                this.set_6taknv$(value);
              }
               else if (typeof value === 'string') {
                this.set_61zpoe$(value);
              }
               else if (Kotlin.equals(typeof value, 'array')) {
                this.type = _.com.lodestarlearning.jsparser.ValueType.object.ARRAY;
                this.obj_fwbkai$ = value;
              }
               else if (Kotlin.equals(typeof value, 'function')) {
                this.type = _.com.lodestarlearning.jsparser.ValueType.object.FUNCTION;
                this.obj_fwbkai$ = value;
              }
               else if (Kotlin.equals(typeof value, 'object')) {
                this.type = _.com.lodestarlearning.jsparser.ValueType.object.OBJECT;
                this.obj_fwbkai$ = value;
              }
               else {
                throw new Kotlin.IllegalArgumentException('Unknown type: ' + value);
              }
            },
            set_30wzo8$: function (value) {
              _.com.lodestarlearning.jsparser.Value.prototype.set_30wzo8$.call(this, value);
              if (Kotlin.isType(value, _.com.lodestarlearning.jsparser.DynValue)) {
                this.obj_fwbkai$ = value.obj_fwbkai$;
              }
               else {
                this.obj_fwbkai$ = null;
              }
            },
            clear: function () {
              _.com.lodestarlearning.jsparser.Value.prototype.clear.call(this);
              this.obj_fwbkai$ = null;
            },
            primitive: function () {
              var tmp$0, tmp$1;
              tmp$0 = this.type;
              if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.FUNCTION)
                return this.obj_fwbkai$;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.ARRAY) {
                var dynObj = new Array();
                var current = this.first;
                var index = 0;
                while (current != null) {
                  dynObj[index++] = current.primitive();
                  current = current.next;
                }
                return dynObj;
              }
               else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.OBJECT) {
                var dynObj_0 = new Object();
                var current_0 = this.first;
                while (current_0 != null) {
                  dynObj_0[(tmp$1 = current_0.name) != null ? tmp$1 : Kotlin.throwNPE()] = current_0.primitive();
                  current_0 = current_0.next;
                }
                return dynObj_0;
              }
               else
                return _.com.lodestarlearning.jsparser.Value.prototype.primitive.call(this);
            },
            execute_30wzo8$: function (params) {
              if (this.type !== _.com.lodestarlearning.jsparser.ValueType.object.FUNCTION)
                throw new Kotlin.IllegalStateException('Cannot execute a non-function');
              if (params.type !== _.com.lodestarlearning.jsparser.ValueType.object.ARRAY)
                throw new Kotlin.IllegalArgumentException('params must be of type ValueType.ARRAY');
              var value = new _.com.lodestarlearning.jsparser.DynValue();
              var result = this.obj_fwbkai$.apply(null, params.primitive());
              value.set_za3rmp$(result);
              return value;
            },
            clone: function () {
              var value = new _.com.lodestarlearning.jsparser.DynValue();
              value.set_30wzo8$(this);
              return value;
            }
          }),
          isDigit_myv2d1$: function ($receiver) {
            return $receiver >= '0' && $receiver <= '9' || $receiver === '-' || $receiver === '+';
          },
          isWhitespace2_myv2d1$: function ($receiver) {
            return $receiver <= ' ' || $receiver === Kotlin.toChar(160);
          },
          peek_38s8h8$: function ($receiver) {
            if ($receiver.isEmpty())
              return null;
            else
              return Kotlin.modules['stdlib'].kotlin.collections.last_fvq2g0$($receiver);
          },
          pop_38s8h8$: function ($receiver) {
            if ($receiver.isEmpty())
              return null;
            else
              return Kotlin.modules['stdlib'].kotlin.collections.remove_6qa5fa$($receiver, $receiver.size - 1);
          },
          containsAt_npf0uk$: function ($receiver, str, startIndex) {
            var tmp$0;
            var n = Kotlin.modules['stdlib'].kotlin.collections.length_gw00vq$(str);
            tmp$0 = n - 1;
            for (var i = 0; i <= tmp$0; i++) {
              if ($receiver.charAt(i + startIndex) !== str.charAt(i)) {
                return false;
              }
            }
            return true;
          },
          tokenReplace_kgwev4$: function ($receiver, tokens) {
            var tmp$0;
            var str = $receiver;
            tmp$0 = Kotlin.modules['stdlib'].kotlin.collections.get_lastIndex_eg9ybj$(tokens);
            for (var i = 0; i <= tmp$0; i++) {
              str = Kotlin.modules['stdlib'].kotlin.collections.joinToString_sdec0h$(Kotlin.modules['stdlib'].kotlin.text.split_l2gz7$(str, ['\\' + '{' + i + '\\' + '}']), tokens[i]);
            }
            return str;
          },
          get_xlvxwk$: function ($receiver, key, defaultValue) {
            var tmp$0;
            return (tmp$0 = $receiver.get_za3rmp$(key)) != null ? tmp$0 : defaultValue;
          },
          Operation_9f03x9$: function (operationA, operator, operationB) {
            var o = new _.com.lodestarlearning.jsparser.Operation(new _.com.lodestarlearning.jsparser.Value());
            o.operationA = operationA;
            o.operationB = operationB;
            o.operator = operator;
            return o;
          },
          Operation: Kotlin.createClass(function () {
            return [Kotlin.Comparable];
          }, function (value) {
            if (value === void 0)
              value = new _.com.lodestarlearning.jsparser.Value();
            this.value = value;
            this.operationA = null;
            this.operationB = null;
            this.operator = null;
            this.depth = 0;
            this.startIndex = -1;
            this.endIndex = -1;
            this.prev = null;
            this.name = null;
          }, /** @lends _.com.lodestarlearning.jsparser.Operation.prototype */ {
            execute_30wzo8$: function (scope) {
              var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7, tmp$8, tmp$9, tmp$10, tmp$11, tmp$12, tmp$13, tmp$14, tmp$15;
              this.name = null;
              this.prev = null;
              if (this.operator === null) {
                if (this.value.isReference()) {
                  return scope.get_61zpoe$(this.value.asReference());
                }
                 else {
                  return this.value.clone();
                }
              }
              var operandA = ((tmp$0 = this.operationA) != null ? tmp$0 : Kotlin.throwNPE()).execute_30wzo8$(scope);
              if (this.operator === _.com.lodestarlearning.jsparser.Operator.object.ELSE) {
                if (!operandA.isBoolean())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.UNEXPECTED_ELSE, [operandA.toString()]);
                var a = operandA.asBoolean();
                if (!a) {
                  var result = ((tmp$1 = this.operationB) != null ? tmp$1 : Kotlin.throwNPE()).execute_30wzo8$(scope);
                  if (result.isPrimitive()) {
                    this.value.set_6taknv$(result.asBoolean());
                  }
                   else {
                    this.value.set_6taknv$(true);
                  }
                }
                 else {
                  this.value.set_6taknv$(true);
                }
                return this.value;
              }
               else if (this.operator === _.com.lodestarlearning.jsparser.Operator.object.OBJ) {
                if (!operandA.isVoid()) {
                  if (!operandA.isBoolean())
                    throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.UNEXPECTED_TOKEN, [operandA.toString()]);
                  if (operandA.asBoolean()) {
                    this.setValue_1(true);
                    ((tmp$2 = this.operationB) != null ? tmp$2 : Kotlin.throwNPE()).execute_30wzo8$(scope);
                    return this.value;
                  }
                   else {
                    this.setValue_1(false);
                    return this.value;
                  }
                }
              }
              var operandB = ((tmp$3 = this.operationB) != null ? tmp$3 : Kotlin.throwNPE()).execute_30wzo8$(scope);
              tmp$4 = this.operator;
              if (tmp$4 === _.com.lodestarlearning.jsparser.Operator.object.IF || tmp$4 === _.com.lodestarlearning.jsparser.Operator.object.FUN || tmp$4 === _.com.lodestarlearning.jsparser.Operator.object.OBJ || tmp$4 === _.com.lodestarlearning.jsparser.Operator.object.TERM || tmp$4 === _.com.lodestarlearning.jsparser.Operator.object.TERM2 || tmp$4 === _.com.lodestarlearning.jsparser.Operator.object.ARR) {
              }
               else if (tmp$4 === _.com.lodestarlearning.jsparser.Operator.object.NEG || tmp$4 === _.com.lodestarlearning.jsparser.Operator.object.BNOT || tmp$4 === _.com.lodestarlearning.jsparser.Operator.object.LNOT) {
                if (operandB.isVoid())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.VOID_SIDED_OPERATION);
              }
               else if (tmp$4 === _.com.lodestarlearning.jsparser.Operator.object.ELSE) {
                if (operandA.isVoid())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.VOID_SIDED_OPERATION);
              }
               else if (tmp$4 === _.com.lodestarlearning.jsparser.Operator.object.INC || tmp$4 === _.com.lodestarlearning.jsparser.Operator.object.DEC) {
                if (operandA.isVoid() && operandB.isVoid())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.VOID_OPERATION);
              }
               else if (operandA.isVoid() || operandB.isVoid())
                throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.VOID_SIDED_OPERATION);
              tmp$5 = this.operator;
              if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.INC)
                if (operandA.isVoid()) {
                  var variable = operandB;
                  variable.add_30wzo8$(_.com.lodestarlearning.jsparser.Value.object.ONE);
                  this.setValue(variable.clone());
                  return this.value;
                }
                 else {
                  var variable_0 = operandA;
                  this.setValue(variable_0.clone());
                  variable_0.add_30wzo8$(_.com.lodestarlearning.jsparser.Value.object.ONE);
                  return this.value;
                }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.DEC)
                if (operandA.isVoid()) {
                  var variable_1 = operandB;
                  variable_1.sub_30wzo8$(_.com.lodestarlearning.jsparser.Value.object.ONE);
                  this.setValue(variable_1.clone());
                  return this.value;
                }
                 else {
                  var variable_2 = operandA;
                  this.setValue(variable_2.clone());
                  variable_2.sub_30wzo8$(_.com.lodestarlearning.jsparser.Value.object.ONE);
                  return this.value;
                }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.FUN) {
                if (operandA.isVoid()) {
                  this.setValue(operandB);
                }
                 else {
                  if (!operandA.isFunction())
                    throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_FUNCTION_EXECUTION);
                  var arguments_0 = new _.com.lodestarlearning.jsparser.Value();
                  arguments_0.type = _.com.lodestarlearning.jsparser.ValueType.object.ARRAY;
                  _.com.lodestarlearning.jsparser.setChildren(arguments_0, (tmp$6 = this.operationB) != null ? tmp$6 : Kotlin.throwNPE(), scope);
                  this.setValue(operandA.execute_30wzo8$(arguments_0));
                }
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.ARR) {
                if (operandA.isVoid()) {
                  this.value.type = _.com.lodestarlearning.jsparser.ValueType.object.ARRAY;
                  _.com.lodestarlearning.jsparser.setChildren(this.value, (tmp$7 = this.operationB) != null ? tmp$7 : Kotlin.throwNPE(), scope);
                }
                 else {
                  var result_0;
                  if (operandA.isNull()) {
                    operandA.type = _.com.lodestarlearning.jsparser.ValueType.object.ARRAY;
                  }
                  if (operandA.isArray()) {
                    try {
                      result_0 = operandA.get_za3lpa$(operandB.asInt());
                    }
                     catch (e) {
                      if (Kotlin.isType(e, Kotlin.IndexOutOfBoundsException)) {
                        throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.INDEX_OUT_OF_BOUNDS, [operandB.asString()]);
                      }
                       else
                        throw e;
                    }
                  }
                   else if (operandA.isObject()) {
                    if (operandB.isVoid())
                      throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.VOID_SIDED_OPERATION);
                    result_0 = operandA.get_61zpoe$(operandB.asString());
                  }
                   else {
                    throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.PRIMITIVE_MEMBER_ACCESS);
                  }
                  this.setValue(result_0);
                }
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.OBJ)
                if (operandA.isVoid()) {
                  this.value.type = _.com.lodestarlearning.jsparser.ValueType.object.OBJECT;
                  _.com.lodestarlearning.jsparser.setChildren(this.value, (tmp$8 = this.operationB) != null ? tmp$8 : Kotlin.throwNPE(), scope);
                  return this.value;
                }
                 else {
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.UNEXPECTED_TOKEN);
                }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.ELE)
                if (operandA.isObject()) {
                  if (!((tmp$9 = this.operationB) != null ? tmp$9 : Kotlin.throwNPE()).value.isReference())
                    throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_VARIABLE_MEMBER_ACCESS);
                  this.setValue(operandA.get_61zpoe$(((tmp$10 = this.operationB) != null ? tmp$10 : Kotlin.throwNPE()).value.asReference()));
                  return this.value;
                }
                 else {
                  if (operandA.isNull()) {
                    this.value.type = _.com.lodestarlearning.jsparser.ValueType.object.NULL;
                    return this.value;
                  }
                   else {
                    throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.PRIMITIVE_MEMBER_ACCESS);
                  }
                }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.NEG) {
                if (operandA.isVoid())
                  this.setValue(_.com.lodestarlearning.jsparser.Value_s8cxhz$(Kotlin.Long.ZERO));
                else
                  this.setValue(operandA);
                if (!this.value.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.value.sub_30wzo8$(operandB);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.BNOT) {
                if (!operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.setValue(operandB);
                this.value.bnot();
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.LNOT) {
                if (!operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.setValue(operandB);
                this.value.not();
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.MUL) {
                if (!operandA.isPrimitive() || !operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.setValue(operandA);
                this.value.mul_30wzo8$(operandB);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.DIV) {
                if (!operandA.isPrimitive() || !operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                var opB = operandB;
                if (opB.isZero()) {
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.DIVISION_BY_ZERO);
                }
                this.setValue(operandA);
                this.value.div_30wzo8$(opB);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.MOD) {
                if (!operandA.isPrimitive() || !operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.setValue(operandA);
                this.value.mod_30wzo8$(operandB);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.ADD) {
                if (!operandA.isPrimitive() || !operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.setValue(operandA);
                this.value.add_30wzo8$(operandB);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.SUB) {
                if (!operandA.isPrimitive() || !operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.setValue(operandA);
                this.value.sub_30wzo8$(operandB);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.NAME) {
                this.setValue(operandB);
                if (((tmp$11 = this.operationA) != null ? tmp$11 : Kotlin.throwNPE()).value.isReference()) {
                  this.name = ((tmp$12 = this.operationA) != null ? tmp$12 : Kotlin.throwNPE()).value.asReference();
                }
                 else {
                  this.name = ((tmp$13 = this.operationA) != null ? tmp$13 : Kotlin.throwNPE()).value.asString();
                }
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.LT) {
                if (!operandA.isPrimitive() || !operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.setValue_1(operandA.compareTo_30wzo8$(operandB) < 0);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.GT) {
                if (!operandA.isPrimitive() || !operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.setValue_1(operandA.compareTo_30wzo8$(operandB) > 0);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.GTE) {
                if (!operandA.isPrimitive() || !operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.setValue_1(operandA.compareTo_30wzo8$(operandB) >= 0);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.LTE) {
                if (!operandA.isPrimitive() || !operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.setValue_1(operandA.compareTo_30wzo8$(operandB) <= 0);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.EQ) {
                this.setValue_1(operandA != null ? operandA.equals_za3rmp$(operandB) : null);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.NEQ) {
                this.setValue_1(!(operandA != null ? operandA.equals_za3rmp$(operandB) : null));
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.BAND) {
                if (!operandA.isPrimitive() || !operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.setValue(operandA);
                this.value.band_30wzo8$(operandB);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.BXOR) {
                if (!operandA.isPrimitive() || !operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.setValue(operandA);
                this.value.bxor_30wzo8$(operandB);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.BOR) {
                if (!operandA.isPrimitive() || !operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.setValue(operandA);
                this.value.bor_30wzo8$(operandB);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.LAND) {
                if (!operandA.isPrimitive() || !operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.setValue_1(operandA.and_30wzo8$(operandB));
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.LOR) {
                if (!operandA.isPrimitive() || !operandB.isPrimitive())
                  throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.NON_PRIMITIVE_MATH);
                this.setValue_1(operandA.or_30wzo8$(operandB));
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.COMMA) {
                this.setValue(operandB);
                this.name = ((tmp$14 = this.operationB) != null ? tmp$14 : Kotlin.throwNPE()).name;
                this.prev = this.operationA;
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.ASS) {
                var variable_3 = operandA;
                variable_3.set_30wzo8$(operandB);
                this.setValue(operandB);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.PLUS_ASS) {
                var variable_4 = operandA;
                this.setValue(operandA);
                this.value.add_30wzo8$(operandB);
                variable_4.set_30wzo8$(this.value);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.MINUS_ASS) {
                var variable_5 = operandA;
                this.setValue(operandA);
                this.value.sub_30wzo8$(operandB);
                variable_5.set_30wzo8$(this.value);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.MUL_ASS) {
                var variable_6 = operandA;
                this.setValue(operandA);
                this.value.mul_30wzo8$(operandB);
                variable_6.set_30wzo8$(this.value);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.DIV_ASS) {
                var variable_7 = operandA;
                this.setValue(operandA);
                this.value.div_30wzo8$(operandB);
                variable_7.set_30wzo8$(this.value);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.MOD_ASS) {
                var variable_8 = operandA;
                this.setValue(operandA);
                this.value.mod_30wzo8$(operandB);
                variable_8.set_30wzo8$(this.value);
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.ELVIS) {
                if (operandA.isVoid() || operandA.isNull()) {
                  this.setValue(operandB);
                }
                 else {
                  this.setValue(operandA);
                }
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.TERM2 || tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.TERM) {
                if (operandB.isVoid()) {
                  this.setValue(operandA);
                }
                 else {
                  this.setValue(operandB);
                }
                return this.value;
              }
               else if (tmp$5 === _.com.lodestarlearning.jsparser.Operator.object.IF) {
                this.setValue(operandB);
                return this.value;
              }
               else
                throw new _.com.lodestarlearning.jsparser.ParseException(this.startIndex_1(), this.endIndex_1(), _.com.lodestarlearning.jsparser.ParseExceptionType.object.UNSUPPORTED_OPERATOR, [((tmp$15 = this.operator) != null ? tmp$15 : Kotlin.throwNPE()).start]);
            },
            setValue: function (target) {
              this.value = target;
              return this.value;
            },
            setValue_1: function (target) {
              this.value.set_za3rmp$(target);
              return this.value;
            },
            append_sp72gj$: function (operationB, operator, depth) {
              var tmp$0, tmp$1, tmp$2;
              if (operationB.operator !== null) {
                var root = this.append_sp72gj$((tmp$0 = operationB.operationA) != null ? tmp$0 : Kotlin.throwNPE(), operator, depth);
                return root.append_sp72gj$((tmp$1 = operationB.operationB) != null ? tmp$1 : Kotlin.throwNPE(), (tmp$2 = operationB.operator) != null ? tmp$2 : Kotlin.throwNPE(), operationB.depth);
              }
              var newOperation = new _.com.lodestarlearning.jsparser.Operation();
              newOperation.operator = operator;
              newOperation.operationB = operationB;
              newOperation.depth = depth;
              var newParent = null;
              var right = this;
              while (right != null && newOperation.compareTo_za3rmp$(right) > 0) {
                newParent = right;
                right = right.operationB;
              }
              if (newParent == null) {
                newOperation.operationA = this;
                return newOperation;
              }
               else {
                newOperation.operationA = newParent.operationB;
                newParent.operationB = newOperation;
                return this;
              }
            },
            toString: function () {
              var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7;
              if (this.operator === null) {
                return this.value.toString();
              }
              if (((tmp$0 = this.operator) != null ? tmp$0 : Kotlin.throwNPE()).end != null) {
                return ((tmp$1 = this.operationA) != null ? tmp$1 : Kotlin.throwNPE()).toString() + ((tmp$2 = this.operator) != null ? tmp$2 : Kotlin.throwNPE()).start + ((tmp$3 = this.operationB) != null ? tmp$3 : Kotlin.throwNPE()).toString() + ((tmp$4 = this.operator) != null ? tmp$4 : Kotlin.throwNPE()).end;
              }
              return ((tmp$5 = this.operationA) != null ? tmp$5 : Kotlin.throwNPE()).toString() + ((tmp$6 = this.operator) != null ? tmp$6 : Kotlin.throwNPE()).start + ((tmp$7 = this.operationB) != null ? tmp$7 : Kotlin.throwNPE()).toString();
            },
            priority: function () {
              var tmp$0;
              if (this.operator === null)
                return 1.0E10;
              return this.depth * 1000.0 + ((tmp$0 = this.operator) != null ? tmp$0 : Kotlin.throwNPE()).priority;
            },
            compareTo_za3rmp$: function (other) {
              return Kotlin.primitiveCompareTo(this.priority(), other.priority());
            },
            optimize: function () {
              this.reduce(this);
            },
            reduce: function (operation) {
              if (operation == null)
                return true;
              if (operation.operator === null) {
                return !operation.value.isReference();
              }
               else {
                var sideA = this.reduce(operation.operationA);
                var sideB = this.reduce(operation.operationB);
                if (sideA && sideB) {
                  operation.cache();
                  return true;
                }
                return false;
              }
            },
            cache: function () {
              this.execute_30wzo8$(new _.com.lodestarlearning.jsparser.Value());
              this.operationA = null;
              this.operator = null;
              this.operationB = null;
            },
            startIndex_1: function () {
              var tmp$0;
              return ((tmp$0 = this.operationA) != null ? tmp$0 : Kotlin.throwNPE()).right().startIndex;
            },
            endIndex_1: function () {
              var tmp$0;
              return ((tmp$0 = this.operationB) != null ? tmp$0 : Kotlin.throwNPE()).left().endIndex;
            },
            right: function () {
              var tmp$0;
              if (this.operationB == null)
                return this;
              return ((tmp$0 = this.operationB) != null ? tmp$0 : Kotlin.throwNPE()).right();
            },
            left: function () {
              var tmp$0;
              if (this.operationA == null)
                return this;
              return ((tmp$0 = this.operationA) != null ? tmp$0 : Kotlin.throwNPE()).left();
            }
          }),
          setChildren: function ($receiver, operation, scope) {
            var tmp$0;
            if (!($receiver.isArray() || $receiver.isObject()))
              throw new Kotlin.Exception('Cannot set the children of a Value that is neither Array nor Object');
            $receiver.clearChildren();
            if (operation.value.isVoid()) {
              return;
            }
            var n = operation;
            while (n != null) {
              var v = n.value.isReference() ? scope.get_61zpoe$(n.value.asReference()).clone() : n.value.clone();
              if (n.name != null) {
                $receiver.prepend_db2edy$(v, (tmp$0 = n.name) != null ? tmp$0 : Kotlin.throwNPE());
              }
               else {
                $receiver.prepend_30wzo8$(v);
              }
              n = n.prev;
            }
          },
          OperationParser: Kotlin.createClass(null, function () {
            this.STOP_TAGS_jiu5at$ = new _.com.lodestarlearning.jsparser.AlphaTree();
            this.stopEnd_9a8riw$ = null;
            this.STOP_TAGS_jiu5at$.add_a8ip1j$('"', '"');
            this.STOP_TAGS_jiu5at$.add_a8ip1j$("'", "'");
            this.STOP_TAGS_jiu5at$.add_a8ip1j$('/**', '**/');
            this.STOP_TAGS_jiu5at$.add_a8ip1j$('//', '\n');
          }, /** @lends _.com.lodestarlearning.jsparser.OperationParser.prototype */ {
            parse_ivxn3r$: function (expression, optimize) {
              if (optimize === void 0)
                optimize = true;
              if (expression == null)
                return new _.com.lodestarlearning.jsparser.Operation(_.com.lodestarlearning.jsparser.Value.object.VOID);
              this.stopEnd_9a8riw$ = null;
              var operation = this.parseInternal(expression, 0, expression.length);
              if (optimize)
                operation.optimize();
              return operation;
            },
            parseInternal: function (value, fromIndex, toIndex) {
              var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4;
              var fromIndex_0 = fromIndex;
              var prevOperation = null;
              var prevOperator = null;
              var prevDepth = 0;
              var stack = new Kotlin.ArrayList();
              var i = fromIndex_0;
              while (i < toIndex) {
                if (this.stopEnd_9a8riw$ == null) {
                  this.stopEnd_9a8riw$ = this.STOP_TAGS_jiu5at$.find_905azu$(value, i);
                  if (this.stopEnd_9a8riw$ != null) {
                    i++;
                    continue;
                  }
                }
                 else {
                  if (_.com.lodestarlearning.jsparser.containsAt_npf0uk$(value, (tmp$0 = this.stopEnd_9a8riw$) != null ? tmp$0 : Kotlin.throwNPE(), i)) {
                    this.stopEnd_9a8riw$ = null;
                  }
                   else {
                    i++;
                    continue;
                  }
                }
                var endOp = _.com.lodestarlearning.jsparser.OperatorLookup.withEndTag_905azu$(value, i);
                if (endOp !== null) {
                  if (stack.size === 0 || endOp !== _.com.lodestarlearning.jsparser.peek_38s8h8$(stack)) {
                    throw new _.com.lodestarlearning.jsparser.ParseException(i, i + 1, _.com.lodestarlearning.jsparser.ParseExceptionType.object.EXTRA_END_TOKEN, [(tmp$1 = endOp.end) != null ? tmp$1 : Kotlin.throwNPE()]);
                  }
                  prevOperation = this.appendOperation(prevOperation, prevOperator, value, fromIndex_0, i, prevDepth);
                  _.com.lodestarlearning.jsparser.pop_38s8h8$(stack);
                  prevDepth = stack.size;
                  prevOperator = null;
                  fromIndex_0 = i + Kotlin.modules['stdlib'].kotlin.collections.length_gw00vq$((tmp$2 = endOp.end) != null ? tmp$2 : Kotlin.throwNPE());
                  i = fromIndex_0 - 1;
                }
                var startOp = _.com.lodestarlearning.jsparser.OperatorLookup.withStartTag_905azu$(value, i);
                if (startOp !== null) {
                  if (startOp === _.com.lodestarlearning.jsparser.Operator.object.SUB && this.isWhitespace(value, fromIndex_0, i)) {
                    startOp = _.com.lodestarlearning.jsparser.Operator.object.NEG;
                  }
                  if (startOp === _.com.lodestarlearning.jsparser.Operator.object.ELE && this.isNumeric(value, fromIndex_0, i)) {
                    i++;
                    continue;
                  }
                  prevOperation = this.appendOperation(prevOperation, prevOperator, value, fromIndex_0, i, prevDepth);
                  prevOperator = startOp;
                  prevDepth = stack.size;
                  fromIndex_0 = i + startOp.start.length;
                  i = fromIndex_0 - 1;
                  if (startOp.end != null) {
                    stack.add_za3rmp$(startOp);
                  }
                }
                i++;
              }
              if (stack.size > 0) {
                throw new _.com.lodestarlearning.jsparser.ParseException(i, i + 1, _.com.lodestarlearning.jsparser.ParseExceptionType.object.MISSING_END_TOKEN, [(tmp$4 = ((tmp$3 = _.com.lodestarlearning.jsparser.peek_38s8h8$(stack)) != null ? tmp$3 : Kotlin.throwNPE()).end) != null ? tmp$4 : Kotlin.throwNPE()]);
              }
              prevOperation = this.appendOperation(prevOperation, prevOperator, value, fromIndex_0, i, 0);
              return prevOperation;
            },
            isNumeric: function (expression, fromIndex, toIndex) {
              var fromIndex_0 = fromIndex;
              while (fromIndex_0 < toIndex && _.com.lodestarlearning.jsparser.isWhitespace2_myv2d1$(expression.charAt(fromIndex_0))) {
                fromIndex_0++;
              }
              if (fromIndex_0 !== toIndex) {
                if (_.com.lodestarlearning.jsparser.isDigit_myv2d1$(expression.charAt(fromIndex_0))) {
                  return true;
                }
              }
              return false;
            },
            isWhitespace: function (expression, fromIndex, toIndex) {
              var fromIndex_0 = fromIndex;
              while (fromIndex_0 < toIndex && _.com.lodestarlearning.jsparser.isWhitespace2_myv2d1$(expression.charAt(fromIndex_0))) {
                fromIndex_0++;
              }
              return fromIndex_0 === toIndex;
            },
            appendOperation: function (operation, operator, expression, fromIndex, toIndex, depth) {
              var fromIndex_0 = fromIndex;
              var toIndex_0 = toIndex;
              while (fromIndex_0 < toIndex_0 && _.com.lodestarlearning.jsparser.isWhitespace2_myv2d1$(expression.charAt(fromIndex_0))) {
                fromIndex_0++;
              }
              while (fromIndex_0 < toIndex_0 && _.com.lodestarlearning.jsparser.isWhitespace2_myv2d1$(expression.charAt(toIndex_0 - 1))) {
                toIndex_0--;
              }
              if (operator === null) {
                if (operation == null) {
                  var primitive = this.parsePrimitive(expression, fromIndex_0, toIndex_0);
                  primitive.depth = depth;
                  primitive.startIndex = fromIndex_0;
                  primitive.endIndex = toIndex_0;
                  return primitive;
                }
                 else {
                  if (fromIndex_0 !== toIndex_0) {
                    throw new _.com.lodestarlearning.jsparser.ParseException(fromIndex_0, toIndex_0, _.com.lodestarlearning.jsparser.ParseExceptionType.object.UNEXPECTED_TOKEN, [expression.charAt(fromIndex_0).toString()]);
                  }
                  return operation;
                }
              }
               else {
                var primitive_0 = this.parsePrimitive(expression, fromIndex_0, toIndex_0);
                primitive_0.depth = depth;
                primitive_0.startIndex = fromIndex_0;
                primitive_0.endIndex = toIndex_0;
                var o = (operation != null ? operation : Kotlin.throwNPE()).append_sp72gj$(primitive_0, operator, depth);
                return o;
              }
            },
            parsePrimitive: function (value, fromIndex, toIndex) {
              var primitive = _.com.lodestarlearning.jsparser.Value.object.fromString_3m52m6$(value, fromIndex, toIndex);
              return new _.com.lodestarlearning.jsparser.Operation(primitive);
            }
          }),
          Operator: Kotlin.createEnumClass(function () {
            return [Kotlin.Enum];
          }, function $fun(priority, start, end, skipAdd) {
            if (end === void 0)
              end = null;
            if (skipAdd === void 0)
              skipAdd = false;
            $fun.baseInitializer.call(this);
            this.priority = priority;
            this.start = start;
            this.end = end;
            this.skipAdd = skipAdd;
          }, function () {
            return {
              IF: new _.com.lodestarlearning.jsparser.Operator(100, 'if'),
              FUN: new _.com.lodestarlearning.jsparser.Operator(22, '(', ')'),
              ARR: new _.com.lodestarlearning.jsparser.Operator(22, '[', ']'),
              OBJ: new _.com.lodestarlearning.jsparser.Operator(22, '{', '}'),
              ELE: new _.com.lodestarlearning.jsparser.Operator(22, '.'),
              NEG: new _.com.lodestarlearning.jsparser.Operator(20, '-', null, true),
              INC: new _.com.lodestarlearning.jsparser.Operator(19, '++'),
              DEC: new _.com.lodestarlearning.jsparser.Operator(19, '--'),
              LNOT: new _.com.lodestarlearning.jsparser.Operator(19, '!'),
              BNOT: new _.com.lodestarlearning.jsparser.Operator(19, '~'),
              MUL: new _.com.lodestarlearning.jsparser.Operator(17, '*'),
              DIV: new _.com.lodestarlearning.jsparser.Operator(17, '/'),
              MOD: new _.com.lodestarlearning.jsparser.Operator(17, '%'),
              ADD: new _.com.lodestarlearning.jsparser.Operator(16, '+'),
              SUB: new _.com.lodestarlearning.jsparser.Operator(16, '-'),
              LT: new _.com.lodestarlearning.jsparser.Operator(14, '<'),
              LTE: new _.com.lodestarlearning.jsparser.Operator(14, '<='),
              GT: new _.com.lodestarlearning.jsparser.Operator(14, '>'),
              GTE: new _.com.lodestarlearning.jsparser.Operator(14, '>='),
              EQ: new _.com.lodestarlearning.jsparser.Operator(13, '=='),
              NEQ: new _.com.lodestarlearning.jsparser.Operator(13, '!='),
              BAND: new _.com.lodestarlearning.jsparser.Operator(12, '&'),
              BXOR: new _.com.lodestarlearning.jsparser.Operator(11, '^'),
              BOR: new _.com.lodestarlearning.jsparser.Operator(10, '|'),
              LAND: new _.com.lodestarlearning.jsparser.Operator(9, '&&'),
              LOR: new _.com.lodestarlearning.jsparser.Operator(8, '||'),
              ELVIS: new _.com.lodestarlearning.jsparser.Operator(7, '?:'),
              NAME: new _.com.lodestarlearning.jsparser.Operator(6, ':'),
              ASS: new _.com.lodestarlearning.jsparser.Operator(6, '='),
              PLUS_ASS: new _.com.lodestarlearning.jsparser.Operator(6, '+='),
              MINUS_ASS: new _.com.lodestarlearning.jsparser.Operator(6, '-='),
              MUL_ASS: new _.com.lodestarlearning.jsparser.Operator(6, '*='),
              DIV_ASS: new _.com.lodestarlearning.jsparser.Operator(6, '/='),
              MOD_ASS: new _.com.lodestarlearning.jsparser.Operator(6, '%='),
              TERM: new _.com.lodestarlearning.jsparser.Operator(5, ';'),
              TERM2: new _.com.lodestarlearning.jsparser.Operator(5, '\n'),
              COMMA: new _.com.lodestarlearning.jsparser.Operator(4, ','),
              ELSE: new _.com.lodestarlearning.jsparser.Operator(3, 'else')
            };
          }),
          ParseException: Kotlin.createClass(function () {
            return [Kotlin.Exception];
          }, function $fun(startIndex, endIndex, type, params) {
            if (params === void 0)
              params = [];
            $fun.baseInitializer.call(this, _.com.lodestarlearning.jsparser.tokenReplace_kgwev4$(type.defaultMessage, params));
            this.startIndex = startIndex;
            this.endIndex = endIndex;
            this.type = type;
            this.params = params;
          }),
          ParseExceptionType: Kotlin.createEnumClass(function () {
            return [Kotlin.Enum];
          }, function $fun(key, defaultMessage) {
            $fun.baseInitializer.call(this);
            this.key = key;
            this.defaultMessage = defaultMessage;
          }, function () {
            return {
              MISSING_END_TOKEN: new _.com.lodestarlearning.jsparser.ParseExceptionType('MISSING_END_TOKEN', 'Missing end token {0}'),
              EXTRA_END_TOKEN: new _.com.lodestarlearning.jsparser.ParseExceptionType('EXTRA_END_TOKEN', 'Unexpected end token {0}'),
              UNEXPECTED_TOKEN: new _.com.lodestarlearning.jsparser.ParseExceptionType('UNEXPECTED_TOKEN', 'Unexpected token {0}'),
              UNTERMINATED_STRING: new _.com.lodestarlearning.jsparser.ParseExceptionType('UNTERMINATED_STRING', 'Unterminated String'),
              VOID_OPERATION: new _.com.lodestarlearning.jsparser.ParseExceptionType('VOID_OPERATION', 'Operation does nothing'),
              VOID_SIDED_OPERATION: new _.com.lodestarlearning.jsparser.ParseExceptionType('VOID_SIDED_OPERATION', 'Cannot perform operation on empty value'),
              PRIMITIVE_MEMBER_ACCESS: new _.com.lodestarlearning.jsparser.ParseExceptionType('PRIMITIVE_MEMBER_ACCESS', 'Illegal member access on primitive value'),
              INDEX_OUT_OF_BOUNDS: new _.com.lodestarlearning.jsparser.ParseExceptionType('INDEX_OUT_OF_BOUNDS', 'Array index {0} is out of bounds'),
              NULL_MEMBER_ACCESS: new _.com.lodestarlearning.jsparser.ParseExceptionType('NULL_MEMBER_ACCESS', 'Illegal member access on null value'),
              NON_VARIABLE_MEMBER_ACCESS: new _.com.lodestarlearning.jsparser.ParseExceptionType('NON_VARIABLE_MEMBER_ACCESS', 'Invalid property name'),
              NON_VARIABLE_ASSIGNMENT: new _.com.lodestarlearning.jsparser.ParseExceptionType('NON_VARIABLE_ASSIGNMENT', 'Invalid assignment'),
              VOID_ASSIGNMENT: new _.com.lodestarlearning.jsparser.ParseExceptionType('VOID_ASSIGNMENT', 'May not assign void to a variable'),
              DIVISION_BY_ZERO: new _.com.lodestarlearning.jsparser.ParseExceptionType('DIVISION_BY_ZERO', 'Division by zero'),
              NON_FUNCTION_EXECUTION: new _.com.lodestarlearning.jsparser.ParseExceptionType('NON_FUNCTION_EXECUTION', 'Cannot execute a non-function'),
              NON_PRIMITIVE_MATH: new _.com.lodestarlearning.jsparser.ParseExceptionType('NON_PRIMITIVE_MATH', 'Cannot perform math on complex object'),
              UNSUPPORTED_OPERATOR: new _.com.lodestarlearning.jsparser.ParseExceptionType('UNSUPPORTED_OPERATOR', 'Unsupported operator {0}'),
              UNEXPECTED_ELSE: new _.com.lodestarlearning.jsparser.ParseExceptionType('UNEXPECTED_ELSE', 'Unexpected else statement')
            };
          }),
          Value_eq31u$: function (type) {
            var v = new _.com.lodestarlearning.jsparser.Value();
            v.type = type;
            return v;
          },
          Value_61zpoe$: function (value) {
            var v = new _.com.lodestarlearning.jsparser.Value();
            v.set_61zpoe$(value);
            return v;
          },
          Value_14dthe$: function (value) {
            var v = new _.com.lodestarlearning.jsparser.Value();
            v.set_14dthe$(value);
            return v;
          },
          Value_s8cxhz$: function (value) {
            var v = new _.com.lodestarlearning.jsparser.Value();
            v.set_s8cxhz$(value);
            return v;
          },
          Value_6taknv$: function (value) {
            var v = new _.com.lodestarlearning.jsparser.Value();
            v.set_6taknv$(value);
            return v;
          },
          Value: Kotlin.createClass(function () {
            return [Kotlin.modules['builtins'].kotlin.Iterable];
          }, function () {
            this.type = _.com.lodestarlearning.jsparser.ValueType.object.VOID;
            this.stringValue = '';
            this.doubleValue = 0.0;
            this.longValue = Kotlin.Long.ZERO;
            this.name = null;
            this.first = null;
            this.last = null;
            this.next = null;
            this.prev = null;
            this.size = 0;
          }, /** @lends _.com.lodestarlearning.jsparser.Value.prototype */ {
            isObject: function () {
              return this.type === _.com.lodestarlearning.jsparser.ValueType.object.OBJECT;
            },
            isArray: function () {
              return this.type === _.com.lodestarlearning.jsparser.ValueType.object.ARRAY;
            },
            isFunction: function () {
              return this.type === _.com.lodestarlearning.jsparser.ValueType.object.FUNCTION;
            },
            isReference: function () {
              return this.type === _.com.lodestarlearning.jsparser.ValueType.object.REFERENCE;
            },
            isString: function () {
              return this.type === _.com.lodestarlearning.jsparser.ValueType.object.STRING;
            },
            isPrimitive: function () {
              return this.type === _.com.lodestarlearning.jsparser.ValueType.object.DOUBLE || this.type === _.com.lodestarlearning.jsparser.ValueType.object.LONG || this.type === _.com.lodestarlearning.jsparser.ValueType.object.BOOLEAN || this.type === _.com.lodestarlearning.jsparser.ValueType.object.STRING || this.type === _.com.lodestarlearning.jsparser.ValueType.object.NULL;
            },
            isNumeric: function () {
              return this.type === _.com.lodestarlearning.jsparser.ValueType.object.DOUBLE || this.type === _.com.lodestarlearning.jsparser.ValueType.object.LONG;
            },
            isDouble: function () {
              return this.type === _.com.lodestarlearning.jsparser.ValueType.object.DOUBLE;
            },
            isLong: function () {
              return this.type === _.com.lodestarlearning.jsparser.ValueType.object.LONG;
            },
            isBoolean: function () {
              return this.type === _.com.lodestarlearning.jsparser.ValueType.object.BOOLEAN;
            },
            isNull: function () {
              return this.type === _.com.lodestarlearning.jsparser.ValueType.object.NULL;
            },
            isVoid: function () {
              return this.type === _.com.lodestarlearning.jsparser.ValueType.object.VOID;
            },
            isFlat: function () {
              var current = this.first;
              while (current != null) {
                if (current.type === _.com.lodestarlearning.jsparser.ValueType.object.OBJECT || current.type === _.com.lodestarlearning.jsparser.ValueType.object.ARRAY) {
                  return false;
                }
                current = current.next;
              }
              return true;
            },
            isZero: function () {
              return this.asDouble() === 0.0;
            },
            get_za3lpa$: function (index) {
              if (this.type !== _.com.lodestarlearning.jsparser.ValueType.object.ARRAY)
                throw new Kotlin.IllegalStateException('get(index) called on a non-array');
              if (index >= this.size)
                throw new Kotlin.IndexOutOfBoundsException(index.toString() + " was out of bounds. This Array's size is " + this.size);
              var i = index;
              var current = this.first;
              while (current != null && i-- > 0) {
                current = current.next;
              }
              return current != null ? current : _.com.lodestarlearning.jsparser.Value.object.VOID;
            },
            get_61zpoe$: function (name) {
              if (this.type !== _.com.lodestarlearning.jsparser.ValueType.object.OBJECT)
                throw new Kotlin.IllegalStateException('get(name) called on a non-object');
              var current = this.first;
              while (current != null && !Kotlin.equals(current.name, name)) {
                current = current.next;
              }
              return current != null ? current : _.com.lodestarlearning.jsparser.Value.object.VOID;
            },
            asReference: function () {
              return this.stringValue;
            },
            asString: function () {
              var tmp$0;
              tmp$0 = this.type;
              if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.STRING)
                return this.stringValue;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.DOUBLE)
                return this.doubleValue.toString();
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.LONG)
                return this.longValue.toString();
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.BOOLEAN)
                return !this.longValue.equals_za3rmp$(Kotlin.Long.ZERO) ? 'true' : 'false';
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.NULL)
                return 'null';
              else
                throw new Kotlin.IllegalStateException('Value cannot be converted to string: ' + this.type);
            },
            asDouble: function () {
              var tmp$0, tmp$1;
              tmp$0 = this.type;
              if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.NULL)
                return 0.0;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.DOUBLE)
                return this.doubleValue;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.STRING)
                return (tmp$1 = Kotlin.safeParseDouble(this.stringValue)) != null ? tmp$1 : 0.0;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.LONG)
                return this.longValue.toNumber();
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.BOOLEAN)
                return !this.longValue.equals_za3rmp$(Kotlin.Long.ZERO) ? 1 : 0;
              else
                throw new Kotlin.IllegalStateException('Value cannot be converted to double: ' + this.type);
            },
            asFloat: function () {
              var tmp$0, tmp$1;
              tmp$0 = this.type;
              if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.NULL)
                return 0.0;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.DOUBLE)
                return this.doubleValue;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.STRING)
                return (tmp$1 = Kotlin.safeParseDouble(this.stringValue)) != null ? tmp$1 : 0.0;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.LONG)
                return this.longValue.toNumber();
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.BOOLEAN)
                return !this.longValue.equals_za3rmp$(Kotlin.Long.ZERO) ? 1.0 : 0.0;
              else
                throw new Kotlin.IllegalStateException('Value cannot be converted to float: ' + this.type);
            },
            asLong: function () {
              var tmp$0;
              tmp$0 = this.type;
              if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.NULL)
                return Kotlin.Long.ZERO;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.LONG)
                return this.longValue;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.STRING)
                return Kotlin.Long.fromInt(parseInt(this.stringValue));
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.DOUBLE)
                return Kotlin.Long.fromNumber(this.doubleValue);
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.BOOLEAN)
                return Kotlin.Long.fromInt(!this.longValue.equals_za3rmp$(Kotlin.Long.ZERO) ? 1 : 0);
              else
                throw new Kotlin.IllegalStateException('Value cannot be converted to long: ' + this.type);
            },
            asInt: function () {
              var tmp$0;
              tmp$0 = this.type;
              if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.NULL)
                return 0;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.LONG)
                return this.longValue.toInt();
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.STRING)
                return parseInt(this.stringValue);
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.DOUBLE)
                return this.doubleValue | 0;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.BOOLEAN)
                return !this.longValue.equals_za3rmp$(Kotlin.Long.ZERO) ? 1 : 0;
              else
                throw new Kotlin.IllegalStateException('Value cannot be converted to int: ' + this.type);
            },
            asBoolean: function () {
              var tmp$0;
              tmp$0 = this.type;
              if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.BOOLEAN)
                return !this.longValue.equals_za3rmp$(Kotlin.Long.ZERO);
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.NULL)
                return false;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.STRING)
                return Kotlin.equals(this.stringValue.toLowerCase(), 'true');
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.DOUBLE)
                return this.doubleValue !== 0.0;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.LONG)
                return !this.longValue.equals_za3rmp$(Kotlin.Long.ZERO);
              else
                throw new Kotlin.IllegalStateException('Value cannot be converted to boolean: ' + this.type);
            },
            asFloatArray: function () {
              if (!this.isArray())
                throw new Kotlin.IllegalStateException('Value is not an array: ' + this.type);
              var array = Kotlin.numberArrayOfSize(this.size);
              var i = 0;
              var current = this.first;
              while (current != null) {
                array[i] = current.asFloat();
                current = current.next;
                i++;
              }
              return array;
            },
            asDoubleArray: function () {
              if (!this.isArray())
                throw new Kotlin.IllegalStateException('Value is not an array: ' + this.type);
              var array = Kotlin.numberArrayOfSize(this.size);
              var i = 0;
              var current = this.first;
              while (current != null) {
                array[i] = current.asDouble();
                current = current.next;
                i++;
              }
              return array;
            },
            asBooleanArray: function () {
              if (!this.isArray())
                throw new Kotlin.IllegalStateException('Value is not an array: ' + this.type);
              var array = Kotlin.booleanArrayOfSize(this.size);
              var i = 0;
              var current = this.first;
              while (current != null) {
                array[i] = current.asBoolean();
                current = current.next;
                i++;
              }
              return array;
            },
            asIntArray: function () {
              if (!this.isArray())
                throw new Kotlin.IllegalStateException('Value is not an array: ' + this.type);
              var array = Kotlin.numberArrayOfSize(this.size);
              var i = 0;
              var current = this.first;
              while (current != null) {
                array[i] = current.asInt();
                current = current.next;
                i++;
              }
              return array;
            },
            asLongArray: function () {
              if (!this.isArray())
                throw new Kotlin.IllegalStateException('Value is not an array: ' + this.type);
              var array = Kotlin.longArrayOfSize(this.size);
              var i = 0;
              var current = this.first;
              while (current != null) {
                array[i] = current.asLong();
                current = current.next;
                i++;
              }
              return array;
            },
            asStringArray: function () {
              if (!this.isArray())
                throw new Kotlin.IllegalStateException('Value is not an array: ' + this.type);
              var array = Kotlin.nullArray(this.size);
              var i = 0;
              var current = this.first;
              while (current != null) {
                array[i] = (current != null ? current : Kotlin.throwNPE()).asString();
                current = (current != null ? current : Kotlin.throwNPE()).next;
                i++;
              }
              return array;
            },
            set_30wzo8$: function (value) {
              this.type = value.type;
              this.longValue = value.longValue;
              this.doubleValue = value.doubleValue;
              this.stringValue = value.stringValue;
              var c = value.first;
              while (c != null) {
                var newChild = (c != null ? c : Kotlin.throwNPE()).clone();
                newChild.name = (c != null ? c : Kotlin.throwNPE()).name;
                this.append_30wzo8$(newChild);
                c = (c != null ? c : Kotlin.throwNPE()).next;
              }
            },
            clone: function () {
              var value = new _.com.lodestarlearning.jsparser.Value();
              value.set_30wzo8$(this);
              return value;
            },
            setReference_61zpoe$: function (name) {
              this.stringValue = name;
              this.type = _.com.lodestarlearning.jsparser.ValueType.object.REFERENCE;
            },
            set_za3rmp$: function (value) {
              if (value == null) {
                this.type = _.com.lodestarlearning.jsparser.ValueType.object.NULL;
              }
               else if (typeof value === 'number') {
                this.set_14dthe$(value);
              }
               else if (typeof value === 'number') {
                this.set_mx4ult$(value);
              }
               else if (Kotlin.isType(value, Kotlin.Long)) {
                this.set_s8cxhz$(value);
              }
               else if (typeof value === 'number') {
                this.set_za3lpa$(value);
              }
               else if (typeof value === 'boolean') {
                this.set_6taknv$(value);
              }
               else if (typeof value === 'string') {
                this.set_61zpoe$(value);
              }
               else if (Kotlin.isType(value, _.com.lodestarlearning.jsparser.Value)) {
                this.set_30wzo8$(value);
              }
            },
            set_61zpoe$: function (value) {
              this.stringValue = value;
              this.type = _.com.lodestarlearning.jsparser.ValueType.object.STRING;
            },
            set_14dthe$: function (value) {
              this.doubleValue = value;
              this.type = _.com.lodestarlearning.jsparser.ValueType.object.DOUBLE;
            },
            set_mx4ult$: function (value) {
              this.set_14dthe$(value);
            },
            set_s8cxhz$: function (value) {
              this.longValue = value;
              this.type = _.com.lodestarlearning.jsparser.ValueType.object.LONG;
            },
            set_za3lpa$: function (value) {
              this.set_s8cxhz$(Kotlin.Long.fromInt(value));
            },
            set_6taknv$: function (value) {
              this.longValue = Kotlin.Long.fromInt(value ? 1 : 0);
              this.type = _.com.lodestarlearning.jsparser.ValueType.object.BOOLEAN;
            },
            bnot: function () {
              this.set_s8cxhz$(this.asLong().inv());
            },
            not: function () {
              this.set_6taknv$(!this.asBoolean());
            },
            mul_30wzo8$: function (other) {
              if (this.isLong()) {
                this.longValue = this.longValue.multiply(other.asLong());
              }
               else if (this.isBoolean() || this.isDouble()) {
                this.doubleValue *= other.asDouble();
              }
               else {
                this.set_14dthe$(this.asDouble());
                this.doubleValue *= other.asDouble();
              }
            },
            div_30wzo8$: function (other) {
              if (this.isLong()) {
                this.longValue = this.longValue.div(other.asLong());
              }
               else if (this.isBoolean() || this.isDouble()) {
                this.doubleValue /= other.asDouble();
              }
               else {
                this.set_14dthe$(this.asDouble());
                this.doubleValue /= other.asDouble();
              }
            },
            mod_30wzo8$: function (other) {
              if (this.isLong()) {
                this.longValue = this.longValue.modulo(other.asLong());
              }
               else if (this.isBoolean() || this.isDouble()) {
                this.doubleValue %= other.asDouble();
              }
               else {
                this.set_14dthe$(this.asDouble());
                this.doubleValue %= other.asDouble();
              }
            },
            add_30wzo8$: function (other) {
              if (this.isNull())
                this.type = other.type;
              if (this.isString() || other.isString()) {
                this.type = _.com.lodestarlearning.jsparser.ValueType.object.STRING;
                this.stringValue = this.asString() + other.asString();
              }
               else {
                if (this.isLong()) {
                  this.longValue = this.longValue.add(other.asLong());
                }
                 else if (this.isBoolean() || this.isDouble()) {
                  this.doubleValue += other.asDouble();
                }
                 else {
                  this.set_14dthe$(this.asDouble());
                  this.doubleValue += other.asDouble();
                }
              }
            },
            sub_30wzo8$: function (other) {
              if (this.isNull())
                this.type = other.type;
              if (this.isLong()) {
                this.longValue = this.longValue.subtract(other.asLong());
              }
               else if (this.isBoolean() || this.isDouble()) {
                this.doubleValue -= other.asDouble();
              }
               else {
                this.set_14dthe$(this.asDouble());
                this.doubleValue -= other.asDouble();
              }
            },
            band_30wzo8$: function (other) {
              if (!this.isLong())
                this.set_s8cxhz$(this.asLong());
              this.longValue = this.longValue.and(other.asLong());
            },
            bxor_30wzo8$: function (other) {
              if (!this.isLong())
                this.set_s8cxhz$(this.asLong());
              this.longValue = this.longValue.xor(other.asLong());
            },
            bor_30wzo8$: function (other) {
              if (!this.isLong())
                this.set_s8cxhz$(this.asLong());
              this.longValue = this.longValue.or(other.asLong());
            },
            and_30wzo8$: function (other) {
              return this.asBoolean() && other.asBoolean();
            },
            or_30wzo8$: function (other) {
              return this.asBoolean() || other.asBoolean();
            },
            compareTo_30wzo8$: function (other) {
              var tmp$0;
              tmp$0 = this.type;
              if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.NULL)
                if (other.isNull())
                  return 0;
                else
                  return -1;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.DOUBLE) {
                var otherD = other.asDouble();
                if (Math.abs(otherD - this.doubleValue) < _.com.lodestarlearning.jsparser.Value.object.DOUBLE_TOLERANCE)
                  return 0;
                return Kotlin.primitiveCompareTo(this.doubleValue, otherD);
              }
               else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.LONG || tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.BOOLEAN)
                return this.longValue.compareTo_za3rmp$(other.asLong());
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.STRING)
                return Kotlin.compareTo(this.stringValue, other.asString());
              else
                throw new Kotlin.IllegalStateException('comparison not allowed on type: ' + this.type);
            },
            equals_za3rmp$: function (other) {
              var tmp$0;
              if (!Kotlin.isType(other, _.com.lodestarlearning.jsparser.Value))
                return false;
              tmp$0 = this.type;
              if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.DOUBLE)
                return this.doubleValue === other.asDouble();
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.LONG || tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.BOOLEAN)
                return this.longValue.equals_za3rmp$(other.asLong());
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.STRING)
                return Kotlin.equals(this.asString(), other.asString());
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.NULL)
                return other.isNull();
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.ARRAY || tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.OBJECT) {
                if (this.size !== other.size)
                  return false;
                if (this.type !== other.type)
                  return false;
                var current = this.first;
                var currentOther = other.first;
                while (current != null) {
                  if (!current.equals_za3rmp$(currentOther))
                    return false;
                  current = current.next;
                  currentOther = (currentOther != null ? currentOther : Kotlin.throwNPE()).next;
                }
                return true;
              }
               else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.REFERENCE || tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.FUNCTION)
                return this.type === other.type && Kotlin.equals(this.stringValue, other.stringValue);
              else
                throw new Kotlin.IllegalStateException('eq operator not allowed on type: ' + this.type);
            },
            primitive: function () {
              var tmp$0, tmp$1;
              tmp$0 = this.type;
              if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.DOUBLE)
                return this.asDouble();
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.LONG)
                return this.asLong();
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.BOOLEAN)
                return this.asBoolean();
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.STRING)
                return this.asString();
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.VOID || tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.NULL)
                return null;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.ARRAY) {
                var size = this.size;
                var tmp$2;
                var result = Kotlin.nullArray(size);
                tmp$2 = size - 1;
                for (var i = 0; i <= tmp$2; i++) {
                  result[i] = _.com.lodestarlearning.jsparser.Value.primitive$f(i);
                }
                var arr = result;
                var index = 0;
                var current = this.first;
                while (current != null) {
                  arr[index++] = current.primitive();
                  current = current.next;
                }
                return arr;
              }
               else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.OBJECT) {
                var obj = new Kotlin.DefaultPrimitiveHashMap();
                var current_0 = this.first;
                while (current_0 != null) {
                  obj.put_wn2jw4$((tmp$1 = current_0.name) != null ? tmp$1 : Kotlin.throwNPE(), current_0.primitive());
                  current_0 = current_0.next;
                }
                return obj;
              }
               else {
                throw new Kotlin.IllegalStateException('primitive not allowed on type: ' + this.type);
              }
            },
            execute_30wzo8$: function (params) {
              if (this.type !== _.com.lodestarlearning.jsparser.ValueType.object.FUNCTION)
                throw new Kotlin.IllegalStateException('Cannot execute a non-function');
              return _.com.lodestarlearning.jsparser.Value.object.NULL;
            },
            clearChildren: function () {
              this.size = 0;
              this.first = null;
              this.last = null;
            },
            remove_30wzo8$: function (value) {
              var tmp$0, tmp$1, tmp$2, tmp$3;
              if (value == null)
                return;
              if (value.prev == null) {
                this.first = ((tmp$0 = this.first) != null ? tmp$0 : Kotlin.throwNPE()).next;
                if (this.first != null)
                  ((tmp$1 = this.first) != null ? tmp$1 : Kotlin.throwNPE()).prev = null;
              }
               else {
                ((tmp$2 = value.prev) != null ? tmp$2 : Kotlin.throwNPE()).next = value.next;
                if (value.next != null)
                  ((tmp$3 = value.next) != null ? tmp$3 : Kotlin.throwNPE()).prev = value.prev;
              }
              value.next = null;
              value.prev = null;
              this.size--;
            },
            insert_gzvtks$: function (before, inserted) {
              var tmp$0;
              if (before == null) {
                this.append_30wzo8$(inserted);
                return;
              }
               else if (Kotlin.equals(before, this.first)) {
                this.prepend_30wzo8$(inserted);
                return;
              }
              inserted.next = before;
              inserted.prev = before.prev;
              ((tmp$0 = inserted.prev) != null ? tmp$0 : Kotlin.throwNPE()).next = inserted;
              before.prev = inserted;
              this.size++;
            },
            prepend_db2edy$: function (prepended, name) {
              prepended.name = name;
              this.prepend_30wzo8$(prepended);
            },
            prepend_30wzo8$: function (prepended) {
              var tmp$0;
              if (this.first == null) {
                this.first = prepended;
                this.last = prepended;
                this.size++;
                return;
              }
              ((tmp$0 = this.first) != null ? tmp$0 : Kotlin.throwNPE()).prev = prepended;
              prepended.next = this.first;
              this.first = prepended;
              this.size++;
            },
            append_db2edy$: function (appended, name) {
              appended.name = name;
              this.append_30wzo8$(appended);
            },
            append_30wzo8$: function (appended) {
              var tmp$0;
              if (this.last == null) {
                this.first = appended;
                this.last = appended;
                this.size++;
                return;
              }
              ((tmp$0 = this.last) != null ? tmp$0 : Kotlin.throwNPE()).next = appended;
              appended.prev = this.last;
              this.last = appended;
              this.size++;
            },
            next_30wzo8$: function (value) {
              this.next = value;
              value.prev = this;
            },
            next_0: function () {
              return this.next;
            },
            prev_0: function () {
              return this.prev;
            },
            prev_30wzo8$: function (value) {
              this.prev = value;
              value.next = this;
            },
            iterator: function () {
              if (this.type !== _.com.lodestarlearning.jsparser.ValueType.object.OBJECT && this.type !== _.com.lodestarlearning.jsparser.ValueType.object.ARRAY)
                throw new Kotlin.IllegalStateException('Value is not an Object or Array and is not iterable.');
              return new _.com.lodestarlearning.jsparser.ValueIterator(this.first);
            },
            toString: function () {
              var stringBuilder = new Kotlin.StringBuilder();
              this.prettyPrint_7fu060$(stringBuilder, 0);
              return stringBuilder.toString();
            },
            prettyPrint_7fu060$: function (buffer, depth) {
              var tmp$0;
              tmp$0 = this.type;
              if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.FUNCTION) {
                buffer.append(this.stringValue);
                buffer.append('()');
                return;
              }
               else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.VOID)
                return;
              else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.NULL) {
                buffer.append('null');
                return;
              }
               else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.REFERENCE) {
                buffer.append(this.stringValue);
                return;
              }
               else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.STRING) {
                buffer.append('"' + this.stringValue + '"');
                return;
              }
               else if (tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.OBJECT || tmp$0 === _.com.lodestarlearning.jsparser.ValueType.object.ARRAY) {
              }
               else {
                buffer.append(this.asString());
                return;
              }
              if (this.type === _.com.lodestarlearning.jsparser.ValueType.object.OBJECT) {
                buffer.append('{');
              }
               else if (this.type === _.com.lodestarlearning.jsparser.ValueType.object.ARRAY) {
                buffer.append('[');
              }
              var isFlat = this.isFlat();
              var tabs = '';
              var i = depth;
              while (i-- > 0)
                tabs += '\t';
              var current = this.first;
              if (!isFlat) {
                buffer.append('\n');
                buffer.append(tabs);
              }
              while (current != null) {
                if (!isFlat) {
                  buffer.append('\t');
                }
                if (this.type === _.com.lodestarlearning.jsparser.ValueType.object.OBJECT && current.name != null) {
                  buffer.append('"');
                  buffer.append(current.name);
                  buffer.append('": ');
                }
                current.prettyPrint_7fu060$(buffer, depth + 1);
                current = current.next;
                if (current != null) {
                  buffer.append(', ');
                }
                if (!isFlat) {
                  buffer.append('\n');
                  buffer.append(tabs);
                }
              }
              if (this.type === _.com.lodestarlearning.jsparser.ValueType.object.OBJECT) {
                buffer.append('}');
              }
               else if (this.type === _.com.lodestarlearning.jsparser.ValueType.object.ARRAY) {
                buffer.append(']');
              }
            },
            clear: function () {
              this.type = _.com.lodestarlearning.jsparser.ValueType.object.VOID;
              this.doubleValue = 0.0;
              this.longValue = Kotlin.Long.ZERO;
              this.stringValue = '';
              this.name = null;
              this.first = null;
              this.last = null;
              this.prev = null;
              this.next = null;
              this.size = 0;
            }
          }, /** @lends _.com.lodestarlearning.jsparser.Value */ {
            primitive$f: function (it) {
              return null;
            },
            object_initializer$: function () {
              return Kotlin.createObject(null, function () {
                this.DOUBLE_TOLERANCE = 1.0E-6;
                this.VOID = new _.com.lodestarlearning.jsparser.Value();
                this.NULL = new _.com.lodestarlearning.jsparser.Value();
                this.ONE = _.com.lodestarlearning.jsparser.Value_s8cxhz$(Kotlin.Long.ONE);
                this.NULL.type = _.com.lodestarlearning.jsparser.ValueType.object.NULL;
                this.parseLongAsDouble = false;
              }, {
                fromString_3m52m6$: function (string, fromIndex, toIndex) {
                  var subString = string.substring(fromIndex, toIndex);
                  var value = new _.com.lodestarlearning.jsparser.Value();
                  if (Kotlin.modules['stdlib'].kotlin.collections.length_gw00vq$(subString) === 0) {
                  }
                   else if (Kotlin.equals(subString, 'null')) {
                    value.type = _.com.lodestarlearning.jsparser.ValueType.object.NULL;
                  }
                   else if (Kotlin.equals(subString, 'true')) {
                    value.set_6taknv$(true);
                  }
                   else if (Kotlin.equals(subString, 'false')) {
                    value.set_6taknv$(false);
                  }
                   else if (Kotlin.modules['stdlib'].kotlin.text.first_gw00vq$(subString) === '"' || Kotlin.modules['stdlib'].kotlin.text.first_gw00vq$(subString) === "'") {
                    if (Kotlin.modules['stdlib'].kotlin.text.last_gw00vq$(subString) !== Kotlin.modules['stdlib'].kotlin.text.first_gw00vq$(subString))
                      throw new _.com.lodestarlearning.jsparser.ParseException(fromIndex, toIndex, _.com.lodestarlearning.jsparser.ParseExceptionType.object.UNTERMINATED_STRING);
                    value.set_61zpoe$(subString.substring(1, Kotlin.modules['stdlib'].kotlin.collections.length_gw00vq$(subString) - 1));
                  }
                   else if (this.isIdentifierStart_s8itvh$(subString.charAt(0))) {
                    value.setReference_61zpoe$(subString);
                  }
                   else if (this.parseLongAsDouble || Kotlin.modules['stdlib'].kotlin.text.indexOf_ilfvta$(subString, '.') !== -1 || Kotlin.modules['stdlib'].kotlin.text.endsWith_41xvrb$(subString, 'f') || Kotlin.modules['stdlib'].kotlin.text.endsWith_41xvrb$(subString, 'd')) {
                    var double = Kotlin.safeParseDouble(subString);
                    if (double == null)
                      value.set_za3rmp$(null);
                    else
                      value.set_14dthe$(double);
                  }
                   else {
                    value.set_za3lpa$(parseInt(subString));
                  }
                  return value;
                },
                isIdentifierStart_s8itvh$: function (char) {
                  return !_.com.lodestarlearning.jsparser.isDigit_myv2d1$(char);
                }
              });
            }
          }),
          ValueIterator: Kotlin.createClass(function () {
            return [Kotlin.modules['builtins'].kotlin.Iterator];
          }, function (head) {
            this.entry = head;
            this.current = null;
          }, /** @lends _.com.lodestarlearning.jsparser.ValueIterator.prototype */ {
            hasNext: function () {
              return this.entry != null;
            },
            next: function () {
              var tmp$0, tmp$1;
              this.current = this.entry;
              this.entry = ((tmp$0 = this.current) != null ? tmp$0 : Kotlin.throwNPE()).next_0();
              return (tmp$1 = this.current) != null ? tmp$1 : Kotlin.throwNPE();
            }
          }),
          ValueType: Kotlin.createEnumClass(function () {
            return [Kotlin.Enum];
          }, function $fun() {
            $fun.baseInitializer.call(this);
          }, function () {
            return {
              OBJECT: new _.com.lodestarlearning.jsparser.ValueType(),
              ARRAY: new _.com.lodestarlearning.jsparser.ValueType(),
              REFERENCE: new _.com.lodestarlearning.jsparser.ValueType(),
              FUNCTION: new _.com.lodestarlearning.jsparser.ValueType(),
              STRING: new _.com.lodestarlearning.jsparser.ValueType(),
              DOUBLE: new _.com.lodestarlearning.jsparser.ValueType(),
              LONG: new _.com.lodestarlearning.jsparser.ValueType(),
              BOOLEAN: new _.com.lodestarlearning.jsparser.ValueType(),
              NULL: new _.com.lodestarlearning.jsparser.ValueType(),
              VOID: new _.com.lodestarlearning.jsparser.ValueType()
            };
          })
        })
      })
    })
  });
  Kotlin.defineModule('JsParser', _);
  _.com.lodestarlearning.main_kand9s$([]);
}(Kotlin));

//@ sourceMappingURL=JsParser.js.map
