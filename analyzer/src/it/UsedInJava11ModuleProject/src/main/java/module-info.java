/*
 * Yet Another UserAgent Analyzer
 * Copyright (C) 2013-2022 Niels Basjes
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module nl.example.java11module {
    // Optional module only needed if the Kryo serialization is desired
//    requires com.esotericsoftware.kryo;

    opens nl.example;
    requires nl.basjes.parse.useragent;
//    requires nl.basjes.collections.prefixmap;
//    requires org.junit.jupiter.api;
}
